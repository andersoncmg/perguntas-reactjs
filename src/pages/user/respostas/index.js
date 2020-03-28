import React, { useState } from "react";
import Painel from "../components/painel";
import "./style.css";
import AnswerBox from "./components/answerBox";

export default function Respostas(props) {
  const [listaPerguntas2, setListaPerguntas2] = useState([
    {
      id: 1,
      name: "Quantos anos vc tem?",
      resposta: "Alguma resposta generica",
      modelo: "algum",
      por: "Fernando"
    },
    {
      id: 2,
      name: "Quais seus hobbies favoritos",
      resposta: "Alguma resposta generica",
      modelo: "outro",
      por: "Roberto"
    },
    {
      id: 3,
      name: "Alguma pergunta invisivel",
      resposta: "Alguma resposta generica",
      modelo: "nao sei qual",
      por: "Maria"
    },
    {
      id: 4,
      name: "Mais uma pergunta exemplo",
      resposta: "Alguma resposta generica",
      modelo: "algum outro",
      por: "Mateus"
    }
  ]);

  const [listaPerguntas, setListaPerguntas] = useState([
    {
      id: 1,
      name: "Quantos anos vc tem meu jovem?",
      modelo: "algum",
      por: "Fernando",
      tipo: 2,
      options: ["Mais de 10", "Menos de 98", "34 anos"]
    },
    {
      id: 3,
      name: "Alguma pergunta invisivel",
      modelo: "nao sei qual",
      por: "Maria",
      tipo: 1
    },
    {
      id: 4,
      name: "Mais uma pergunta exemplo",
      modelo: "algum outro",
      por: "Mateus",
      tipo: 1
    }
  ]);

  const [tabSwitcher, setTabSwitcher] = useState(0);

  return (
    <div className="container">
      <div className="box-content stripe-top">
        <Painel {...props} />
        <div className="col-70 box-list">
          <div>
            <ul className="tab-index">
              <li
                className={tabSwitcher == 0 ? "selected" : ""}
                onClick={() => setTabSwitcher(0)}
              >
                Não Respondidas
              </li>
              <li
                className={tabSwitcher == 1 ? "selected" : ""}
                onClick={() => setTabSwitcher(1)}
              >
                Respondidas
              </li>
            </ul>
            <div id="tab-content">
              {tabSwitcher == 0 ? (
                <ul>
                  {listaPerguntas.map(item => (
                    <li className="list-item" key={item.id}>
                      <AnswerBox {...item} />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {listaPerguntas2.map(item => (
                    <li className="list-item" key={item.id}>
                      <div className="question-box">
                        <strong>{item.name}</strong>
                        <p>{item.resposta}</p>
                        <span>
                          Por: <a href="#">{item.por}</a>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
