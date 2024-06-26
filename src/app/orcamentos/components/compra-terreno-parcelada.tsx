"use client";
import { useEffect, useState } from "react";
import BigNumber from 'bignumber.js';
import { Input } from "../../components/input";
import { useSimulador } from "../context";
import { SimuladorUtil } from "@/app/utils/simulador";

interface CustomProps {
  valorTotalTerreno?: BigNumber
}

export function CompraTerrenoParcelada({ valorTotalTerreno }: CustomProps) {
  const { valorEntrada, setValorEntrada, taxaDeJuros, setTaxaDeJuros, mesDeInicio, setMesDeInicio, prazo, setPrazo, } = useSimulador();
  const [show, setShow] = useState<boolean>(false);

  const saldo = valorTotalTerreno && valorEntrada ? valorTotalTerreno.minus(valorEntrada) : null;
  const valorDaParcela = !!prazo && !!taxaDeJuros && !!saldo ? pagamentoPorPeriodo(taxaDeJuros.toNumber(), prazo?.toNumber(), -(saldo?.toNumber())) : null;
  const valorTotalParcelado = prazo && valorDaParcela && valorEntrada ? prazo.times(valorDaParcela).plus(valorEntrada) : null;

  return (
    <section className={`card compra-terreno-parcelada mb-3 ${show && 'show'}`}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>Compra terreno parcelada</span>
        <button className="btn btn-secondary align-end" type="button" onClick={e => setShow(!show)}>{!show ? 'Incluir' : 'Remover'}</button>
      </div>
      <div className={`collapse ${show && 'show'}`}>
        <div className="row mb-3">
          <div className="col-md">
            <label className="form-label">Valor Da Entrada Sinal</label>
            <Input onChange={setValorEntrada} type="number" groupSymbolLeft="R$" value={valorEntrada} />
            <div className="form-text">{SimuladorUtil.extenso(valorEntrada, { mode: 'currency' })}</div>
          </div>
          <div className="col-md">
            <label className="form-label">Saldo</label>
            <h6>R$ {saldo?.toFormat(2)} / m²</h6>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md">
            <label className="form-label">Taxa De Juros</label>
            <Input onChange={setTaxaDeJuros} type="number" groupSymbolRight="A.M." isPercent value={taxaDeJuros} />
          </div>
          <div className="col-md">
            <label className="form-label">Mês De Início</label>
            <Input onChange={setMesDeInicio} type="number" value={mesDeInicio} />
          </div>
          <div className="col-md">
            <label className="form-label">Prazo em meses</label>
            <Input onChange={setPrazo} type="number" value={prazo} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md">
            <label className="form-label">Mês Da Última Parcela</label>
            <h6>{mesDeInicio && prazo && mesDeInicio.plus(prazo).minus(1).toFormat(0)}</h6>
          </div>
          <div className="col-md">
            <label className="form-label">Valor da parcela</label>
            <h6>R$ {valorDaParcela?.toFormat(2)}</h6>
            <div className="form-text">{SimuladorUtil.extenso(valorDaParcela, { mode: 'currency' })}</div>
          </div>
          <div className="col-md">
            <label className="form-label">Valor Total Parcelado</label>
            <h6>R$ {valorTotalParcelado?.toFormat(2)}</h6>
            <div className="form-text">{SimuladorUtil.extenso(valorTotalParcelado, { mode: 'currency' })}</div>
          </div>
        </div>
      </div>
    </section>
  );
}


function pagamentoPorPeriodo(ir: number, np: number, pv: number, fv: number = 0, type: number = 0): BigNumber {
  /*
  * ir   - interest rate per month
  * np   - number of periods (months)
  * pv   - present value
  * fv   - future value
  * type - when the payments are due:
   *        0: end of the period, e.g. end of month (default)
   *        1: beginning of period
   */
  var pmt, pvif;

  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0)
    return BigNumber(-(pv + fv) / np);

  pvif = Math.pow(1 + ir, np);
  pmt = - ir * (pv * pvif + fv) / (pvif - 1);

  if (type === 1)
    pmt /= (1 + ir);

  return BigNumber(pmt);
}