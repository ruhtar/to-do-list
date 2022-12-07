import React, { Component } from "react";
import style from "./Botao.module.scss";
export default class Botao extends Component<any> {
  render() {
    return <button className={style.botao}>{this.props.children}</button>;
  }
}
