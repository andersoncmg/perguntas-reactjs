import React, { useState } from "react";
import "./questionBox.css";
import OptionsBox from "./optionsBox";
import base from "../../../config/api";

export default function QuestionBox(props) {
  const [question, setQuestion] = useState({
    question_model_id: props.model.id,
    text: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    base
      .post(`/questions`, question)
      .then(() => (window.location.href = props.profile.id));
  };

  return (
    <div className="form-box answerForm">
      <label htmlFor="textarea">Escreva sua pergunta</label>
      <textarea
        name=""
        id="textarea"
        cols="30"
        rows="8"
        onChange={(e) => setQuestion({ ...question, text: e.target.value })}
      >
        {question.text}
      </textarea>
      {props.model.type === "multiple" ? (
        <OptionsBox setQuestion={setQuestion} question={question} />
      ) : (
        ""
      )}
      <div className="answerButtons">
        <form onSubmit={handleSubmit}>
          <button>Enviar</button>
        </form>
        <button className="back" onClick={() => props.setStep(1)}>
          Voltar
        </button>
      </div>
    </div>
  );
}
