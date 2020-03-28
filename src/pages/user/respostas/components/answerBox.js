import React, { useState } from "react";
import "./answerBox.css";

export default function AnswerBox(props) {
  const [showTextArea, setShowTextArea] = useState(false);
  const rejectQuestion = () => {};
  const reject = () => {};

  return (
    <>
      <div className="question-box">
        <strong>{props.name}</strong>
        {!showTextArea ? (
          <div className="question-type">Modelo: {props.modelo} (R$ 4,99)</div>
        ) : (
          <div className="form-box answer">
            {props.tipo == 1 ? (
              <textarea cols="30" rows="5"></textarea>
            ) : (
              props.options.map((item, index) => (
                <div className="input-group">
                  <input
                    id={`option-${index}`}
                    type="radio"
                    name={`select-${props.id}`}
                  />
                  <label htmlFor={`option-${index}`}>{item}</label>
                </div>
              ))
            )}
            <div>
              <button onClick={() => setShowTextArea(false)}>back</button>
              <button className="send" onClick={() => setShowTextArea(false)}>
                enviar
              </button>
            </div>
          </div>
        )}
        <span>
          Por: <a href="#">{props.por}</a>
        </span>
      </div>
      {!showTextArea ? (
        <div className="options-box">
          <div className="option-select">
            <button onClick={() => setShowTextArea(true)} className="accept">
              Aceitar
            </button>
            <button onClick={() => rejectQuestion(props.id)} className="reject">
              Rejeitar
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
