import React from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./App.module.scss";

export default function App() {
  return (
    <div className={style.AppStyle}>
      {" "}
      <Formulario></Formulario>
      <Lista></Lista>
      <Cronometro />
    </div>
  );
}
