import React, { Component } from "react";
import style from "./Botao.module.scss";
export default class Botao extends Component {
  render() {
    return <button className={style.botao}>Adicionar</button>;
  }
}
