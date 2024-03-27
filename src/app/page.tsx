"use client";

import "./page.scss";
// import { add, multiply, divide, format } from "mathjs";

import { Terreno } from "./components/terreno";
import { CompraTerrenoParcelada } from "./components/compra-terreno-parcelada";
import { useState } from "react";
import BigNumber from "bignumber.js";
import { Layout } from "./components/layout";

export default function Home() {
  const [valorTotalTerreno, setValorTotalTerreno] = useState<BigNumber>();

  return (
    <Layout>
      <main className="main container">
        <h1>Calculo de construção</h1>
        <form>
          <Terreno mesesAteVender={26} onValorTotalTerrenoChange={setValorTotalTerreno} />
          <CompraTerrenoParcelada valorTotalTerreno={valorTotalTerreno} />
        </form>
      </main>
    </Layout>
  );
}
