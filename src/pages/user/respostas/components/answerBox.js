import React, { useState } from "react";
import "./answerBox.css";
import base from "../../../../config/api";

export default function AnswerBox(question) {
  const [showTextArea, setShowTextArea] = useState(false);

  const [answer, setAnswer] = useState({
    question_id: question.id,
    text: "",
    option: "",
  });
  const [error, setError] = useState();

  const rejectQuestion = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (answer.text || answer.option) {
      await base.post(`/answer`, { ...answer });
      window.location.href = "/respostas";
    } else {
      setError(
        question.questionModel.type === "text"
          ? "Write your answer"
          : "Choose your answer"
      );
    }
  };

  return (
    <>
      <div className="question-box">
        <strong>{question.text}</strong>
        {!showTextArea ? (
          <div className="question-type">{`Modelo: ${
            question.questionModel.title
          } (${
            question.questionModel.price
              ? "R$ " + question.questionModel.price
              : "Gratis"
          })`}</div>
        ) : (
          <form className="form-box answer" onSubmit={handleSubmit}>
            {question.questionModel.type === "text" ? (
              <textarea
                cols="30"
                rows="5"
                onChange={(e) => setAnswer({ ...answer, text: e.target.value })}
                value={answer.text}
              ></textarea>
            ) : (
              JSON.parse(question.options).map((item, index) => (
                <div className="input-group" key={`option-${index}`}>
                  <input
                    id={`option-${index}`}
                    type="radio"
                    name={`select-${question.id}`}
                    value={index}
                    onChange={(e) =>
                      setAnswer({ ...answer, option: e.target.value })
                    }
                  />
                  <label htmlFor={`option-${index}`}>{item}</label>
                </div>
              ))
            )}
            {error && <div className="error-answer">{error}</div>}
            <div>
              <button onClick={() => setShowTextArea(false)}>back</button>
              <button className="send">enviar</button>
            </div>
          </form>
        )}
        <span>
          Por:{" "}
          <a href={`/perfil/${question.user.id}`}>{question.user.username}</a>
        </span>
      </div>
      {!showTextArea ? (
        <div className="options-box">
          <div className="option-select">
            <button onClick={() => setShowTextArea(true)} className="accept">
              Aceitar
            </button>
            <button
              onClick={() => rejectQuestion(question.id)}
              className="reject"
            >
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
