import React, { useState, useEffect } from "react";
import "./style.css";
import Painel from "../../components/painel";
import base from "../../../config/api";

export default function Perguntas(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base
      .get("/my-questions")
      .then((res) => {
        setQuestionList(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const [questionList, setQuestionList] = useState([]);

  return (
    <div className="container">
      <div className="box-content stripe-top">
        <Painel {...props} />
        <div className="col-70 box-list">
          <div>
            <ul className="tab-index">
              <li>Perguntas</li>
              <li>Arquivadas</li>
            </ul>
            <div id="tab-content">
              <ul>
                {questionList.map((question) => (
                  <li className="list-item">
                    <div className="question-box">
                      <strong>{question.text}</strong>
                      {question.questionModel.type == "text" ? (
                        <>
                          {question.answer ? (
                            <p>{question.answer.text}</p>
                          ) : (
                            <div className="waiting_answer">
                              ...aguardando resposta
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {JSON.parse(question.options).map((item, index) => {
                            let opt = question.answer
                              ? question.answer.option == index
                                ? { checked: "checked" }
                                : { disabled: "disabled" }
                              : { disabled: "disabled" };
                            return (
                              <div
                                className="input-group"
                                key={`option-${index}`}
                              >
                                <input
                                  type="radio"
                                  {...opt}
                                  onChange={() => null}
                                />
                                <label>{item}</label>
                              </div>
                            );
                          })}
                          {question.answer ? (
                            !question.answer.option
                          ) : (
                            <div className="waiting_answer">
                              ...aguardando resposta
                            </div>
                          )}
                        </>
                      )}
                      <span>
                        Para:{" "}
                        <a href={`/perfil/${question.questionModel.user.id}`}>
                          {question.questionModel.user.username}
                        </a>
                      </span>
                    </div>
                    <div className="options-box">
                      <a href="#">Arquivar</a>
                      <div className="paid-value">
                        {question.questionModel.price
                          ? question.questionModel.price
                          : "Gratis"}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
