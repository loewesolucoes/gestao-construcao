"use client";

import "./page.scss";
// import { add, multiply, divide, format } from "mathjs";

import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { Layout } from "./shared/layout";
import { useStorage } from "./contexts/storage";
import { Simulacao } from "./utils/db-repository";
import Link from "next/link";
import { SimuladorUtil } from "./utils/simulador";

function Home() {
  const { isDbOk, repository } = useStorage();

  const [simulacoes, setSimulacoes] = useState<Simulacao[]>([]);

  useEffect(() => {
    isDbOk && load();
  }, [isDbOk]);

  async function load() {
    const result = await repository.list();

    result.forEach(x => {
      x.valorTotal = SimuladorUtil.valorTotal(x.valor, x.itbi, x.escrituraERegistro, x.iptu, SimuladorUtil.MESES_ATE_VENDER)
    })

    console.log(result);

    setSimulacoes(result);
  }

  return (
    <main className="main container">
      <section className="cards d-flex flex-wrap justify-content-center justify-content-lg-start">
        {simulacoes.map(x => (
          <div key={x.id.toNumber()} className="card m-3">
            <div className="card-body">
              <h5 className="card-title">{x.titulo}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Custo Total Terreno: R$ {x.valorTotal?.toFormat(2)}</h6>
              <p className="card-text">Area terreno: {x.area?.toNumber()} m²</p>
              <Link href={`/simular?sim=${x.id}`} className="btn btn-secondary">Ver simulação</Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );

}

export default function Page() {

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
