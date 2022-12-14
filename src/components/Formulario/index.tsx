import React, { Component } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
export default class Formulario extends Component {
  render() {
    return (
      <div>
        {" "}
        <form className={style.novaTarefa}>
          <div className={style.inputContainer}>
            <label htmlFor="tarefa">Adicione um novo estudo</label>
            <input
              type="text"
              name="tarefa"
              id="tarefa"
              placeholder="O que voce quer estudar?"
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="tempo">Tempo</label>
            <input
              type="time"
              step="1"
              name="tempo"
              id="tempo"
              min="00:00:00"
              max="01:30:00"
              required
            />
          </div>
          <Botao>Adicionar</Botao>
        </form>
      </div>
    );
  }
}
