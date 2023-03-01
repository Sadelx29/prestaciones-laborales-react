import React from "react";
import { useState } from "react";
import Mensualidad from "./Mensualidad";

export const Resultado = () => {
  const [Mensualidad, setMensualidad] = useState([]);
  const [sueldo, setSueldo] = useState("");
  const [comision, setComision] = useState("");
  const [total, setTotal] = useState("");


  function CalcularMes(e) {
    console.log('hola')
    e.preventDefault();
    setTotal(sueldo + comision);
    setMensualidad(Mensualidad => [total, ...Mensualidad])
    console.log(Mensualidad)
    setSueldo("")
    setComision("")
  }

  return (
    <div>
      <form onSubmit={CalcularMes}>
        <input
          placeholder="Sueldo"
          type="number"
          value={sueldo}
          onChange={(e) => setSueldo(parseInt(e.target.value))}
        />
        <input
          placeholder="Comisiones"
          type="number"
          value={comision}
          onChange={(e) => setComision(parseInt(e.target.value))}
        />
        <p>{total}</p>
        {Mensualidad.map((Mensualidad, index) => {
          return (
            <div key={index}>
              <h1>{Mensualidad}</h1>
            </div>
          )
        })}
        <input type="submit" value="calcular"></input>
      </form>
    </div>
  );
};
