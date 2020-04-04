import React, { useEffect, useState } from "react";
import Painel from "../../components/painel";
import { useParams } from "react-router-dom";
import base from "../../../config/api";
import "./style.css";

export default function Editar(props) {
  const { id } = useParams();
  const [question, setQuestion] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base
      .get(`/question-models/${id}`)
      .then(res => setQuestion(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    base
      .put(`/question-models/${question.id}`, question)
      .then(() => props.history.push("/meus-modelos"))
      .finally(() => setLoading(false));
  };

  const handleDelete = () => {
    base
      .delete(`/question-models/${question.id}`)
      .then(() => props.history.push("/meus-modelos"));
  };

  const handleChange = e => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="box-content stripe-top">
        <Painel {...props} />
        <div className="col-70 box-form">
          <div className="bar-title">Editar modelo de pergunta</div>
          {question ? (
            <div className="form-box">
              <form onSubmit={handleSubmit}>
                <div className="del-box">
                  <a onClick={handleDelete}>Delete</a>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    id="name"
                    type="text"
                    value={question.title}
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Descrição</label>
                  <textarea
                    id="description"
                    cols="30"
                    rows="5"
                    name="description"
                    onChange={handleChange}
                  >
                    {question.description}
                  </textarea>
                </div>
                <div className="input-group">
                  <div className="input-comlum">
                    {question.type == "multiple" ? (
                      <input
                        id="r-1"
                        type="radio"
                        value="multiple"
                        checked
                        name="type"
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        id="r-1"
                        type="radio"
                        value="multiple"
                        name="type"
                        onChange={handleChange}
                      />
                    )}

                    <label htmlFor="r-1">Multipla Escolha</label>
                  </div>
                  <div className="input-comlum">
                    {question.type == "text" ? (
                      <input
                        id="r-2"
                        type="radio"
                        value="text"
                        checked
                        name="type"
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        id="r-2"
                        type="radio"
                        value="text"
                        name="type"
                        onChange={handleChange}
                      />
                    )}
                    <label htmlFor="r-2">Texto</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-comlum">
                    <label htmlFor="value">Preço</label>
                    <input
                      id="value"
                      type="text"
                      value={question.price}
                      name="price"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-comlum">
                    <label htmlFor="chars">Max. chars</label>
                    <input
                      id="chars"
                      type="text"
                      value={question.max_chars}
                      name="max_chars"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button>Enviar</button>
              </form>
            </div>
          ) : loading ? (
            <div style={{ textAlign: "center" }}>
              <img src="/img/loading.gif" height="50px" />
            </div>
          ) : (
            "Invalid ID"
          )}
        </div>
      </div>
    </div>
  );
}
