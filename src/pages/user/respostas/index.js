import React, { useState, useEffect } from "react";
import Painel from "../../components/painel";
import "./style.css";
import AnswerBox from "./components/answerBox";
import base from "../../../config/api";

export default function Respostas(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base
      .get("/questions")
      .then((res) => {
        setQuestionList(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const [questionList, setQuestionList] = useState([]);
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
                  {questionList.map((question) => {
                    if (!question.answer) {
                      return (
                        <li className="list-item" key={question.id}>
                          <AnswerBox {...question} />
                        </li>
                      );
                    }
                  })}
                </ul>
              ) : (
                <ul>
                  {questionList.map((question) => {
                    if (question.answer) {
                      return (
                        <li className="list-item" key={question.id}>
                          <div className="question-box">
                            <strong>{question.text}</strong>
                            {question.questionModel.type == "text" ? (
                              <p>{question.answer.text}</p>
                            ) : (
                              JSON.parse(question.options).map(
                                (item, index) => {
                                  let opt =
                                    question.answer.option == index
                                      ? { checked: "checked" }
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
                                }
                              )
                            )}
                            <span>
                              Por:{" "}
                              <a href={`/perfil/${question.user.id}`}>
                                {question.user.username}
                              </a>
                            </span>
                          </div>
                        </li>
                      );
                    }
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
