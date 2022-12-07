import React from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import "./style.scss";

export default function App() {
  return (
    <div className="AppStyle">
      {" "}
      <Formulario></Formulario>
      <Lista></Lista>
    </div>
  );
}
