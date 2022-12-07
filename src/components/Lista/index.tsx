import React, { useState } from "react";
import style from "./Lista.module.scss";
import Item from "./item";
function Lista() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "NodeJS",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "02:30:00",
    },
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setTarefas([
            ...tarefas,
            { tarefa: "Spread Operator", tempo: "00:00:05" },
          ]);
        }}
      >
        Estudos do dia!
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
