import React, { useState, useEffect } from "react";
import "./modelsBox.css";
import base from "../../../config/api";

export default function ModelsBox(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base
      .get(`/question-models-by-user-id/${props.profile.id}`)
      .then(res => {
        setModelsList(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const [modelsList, setModelsList] = useState([]);

  return (
    <div>
      <div className="model-title">Selecione um modelo de pergunta</div>
      <ul>
        {modelsList.map(model => (
          <li
            key={model.id}
            className="list-item box-model"
            onClick={() => {
              props.setModel({ id: model.id, type: model.type });
              props.setStep(2);
            }}
          >
            <strong>{model.title}</strong>
            <p className="model-desc">{model.description}</p>
            <div className="model-info">
              <span>{`Tipo: ${
                model.type == "text" ? "Texto" : "Multipla Escolha"
              }`}</span>
              <span>{`Max chars: ${model.max_chars}`}</span>
            </div>
            <div className="model-price">{model.price}</div>
          </li>
        ))}
      </ul>
      <div className="form-box">
        <button onClick={() => props.setStep(0)} className="back-model">
          Voltar
        </button>
      </div>
    </div>
  );
}
