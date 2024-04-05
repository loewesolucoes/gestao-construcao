"use client";


import React, { createContext, useState, useEffect } from "react"
import { useAuth } from "./auth";
import { GDriveUtil } from "../utils/gdrive";
import { DbRepository } from "../utils/db-repository";

interface StorageProviderContext {
  repository: DbRepository
  isDbOk: boolean
  doGDriveSave: () => void
  doGDriveLoad: () => void
}

const StorageContext = createContext<StorageProviderContext>({
  repository: {} as any,
  isDbOk: false,
  doGDriveSave: () => { },
  doGDriveLoad: () => { },
});

export enum AvailableCollections {
  default = "default",
  simulador = "simulador",
}

export function StorageProvider(props: any) {
  const [repository, setRepository] = useState<DbRepository>({} as any);
  const [isDbOk, setIsDbOk] = useState<boolean>(false);
  const { isAuthOk } = useAuth();

  useEffect(() => {
    startStorage();
  }, []);

  async function startStorage() {
    console.log('startStorage');
    const repository = await DbRepository.create();

    setRepository(repository);
    setIsDbOk(true);
    console.log('startStorage isDbOk');
  }

  async function doGDriveSave() {
    console.log('doGDriveSave start');

    if (!isAuthOk)
      throw new Error('you must login on gdrive')

    const dump = await DbRepository.exportLocalDump();

    updateGDrive(dump || '');

    console.log('doGDriveSave end');
  }

  async function doGDriveLoad() {
    console.log('doGDriveLoad start');
    if (!isAuthOk)
      throw new Error('you must login on gdrive')

    await loadGDrive();
    console.log('doGDriveLoad end');
  }

  async function loadGDrive() {
    console.log('loadGDrive');

    const file = await GDriveUtil.getFirstFileByName(GDriveUtil.DB_FILE_NAME);

    if (file) {
      const fileData = await GDriveUtil.getFileById(file.id);

      await DbRepository.persistLocalDump(fileData?.body);
      await startStorage()
    }
  }

  async function updateGDrive(dump: string) {
    console.info('updateGDrive');

    const file = await GDriveUtil.getFirstFileByName(GDriveUtil.DB_FILE_NAME);

    if (file) {
      await GDriveUtil.updateFile(file.id, dump);
    } else {
      await GDriveUtil.createFile(GDriveUtil.DB_FILE_NAME, dump);
    }
  }

  return (
    <StorageContext.Provider
      value={{
        repository,
        isDbOk,
        doGDriveSave,
        doGDriveLoad,
      }}
      {...props} />
  )
}

export const useStorage = () => React.useContext(StorageContext)
