"use client";

import React, { createContext, useState, useEffect } from "react"
import { useEnv } from "./env";
// import PouchDb from "pouchdb-browser";


const LoggingContext = createContext({
  logger: {}
})

const consoleBkp = { ...console };

enum LoggingType {
  log = "log",
  info = "info",
  error = "error",
  warn = "warn",
  debug = "debug",
}

export function LoggingProvider(props: any) {
  const { logLevel } = useEnv()
  const [logger, setLogger] = useState<any>();
  let db: PouchDB.Database = {} as any;

  useEffect(() => {
    startLogging();
  }, []);

  useEffect(() => {
    if (Object.keys(logger || {}).length > 0) {
      window.console.log = logger.log;
      window.console.info = logger.info;
      window.console.debug = logger.debug;
      window.console.error = logger.error;
      window.console.warn = logger.warn;
    }
  }, [logger]);

  async function startLogging() {
    const PouchDB = (await import('pouchdb-browser')).default as any;
    
    db = new PouchDB('logging');

    const newLogger = { ...consoleBkp };

    newLogger.log = createLogging(LoggingType.log);
    newLogger.info = createLogging(LoggingType.info);
    newLogger.error = createLogging(LoggingType.error);
    newLogger.warn = createLogging(LoggingType.warn);
    newLogger.debug = function (...args) {
      if (logLevel === 'debug') {
        const type = LoggingType.debug;

        consoleBkp[type](...args);

        saveLogInDb(type, args);
      }
    };

    setLogger(newLogger);
  }


  function createLogging(type: LoggingType) {
    return function (...args: any[]) {
      consoleBkp[type](...args);

      saveLogInDb(type, args);
    }
  }

  function saveLogInDb(type: LoggingType, args: any[]) {
    db.post({ type, args });
  }

  return (
    <LoggingContext.Provider
      value={{
        logger,
      }}
      {...props}
    />
  )
}

export const useLogging = () => React.useContext(LoggingContext)