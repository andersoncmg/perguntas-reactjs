import React, { useState } from "react";
import "./style.css";
import Painel from "../../components/painel";
import base from "../../../config/api";

export default function Nova(props) {
  const [data, setData] = useState({
    title: "",
    description: "",
    type: "text",
    price: 0,
    max_chars: 0
  });
  const handleSubmit = e => {
    e.preventDefault();
    base
      .post("/question-models", data)
      .then(() => props.history.push("/meus-modelos"));
  };
  return (
    <div className="container">
      <div className="box-content stripe-top">
        <Painel {...props} />
        <div className="col-70 box-form">
          <div className="bar-title">Criar novo modelo de pergunta</div>
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  onChange={e => setData({ ...data, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea
                  name=""
                  id="description"
                  cols="30"
                  rows="5"
                  onChange={e =>
                    setData({ ...data, description: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="input-group">
                <div className="input-comlum">
                  <input
                    id="r-1"
                    type="radio"
                    name="tipo"
                    value="multiple"
                    onChange={e => setData({ ...data, type: e.target.value })}
                  />
                  <label htmlFor="r-1">Multipla Escolha</label>
                </div>
                <div className="input-comlum">
                  <input
                    id="r-2"
                    type="radio"
                    name="tipo"
                    value="text"
                    onChange={e => setData({ ...data, type: e.target.value })}
                  />
                  <label htmlFor="r-2">Texto</label>
                </div>
              </div>
              <div className="form-group">
                <div className="input-comlum">
                  <label htmlFor="value">Preço</label>
                  <input
                    id="value"
                    type="text"
                    onChange={e => setData({ ...data, price: e.target.value })}
                  />
                </div>
                <div className="input-comlum">
                  <label htmlFor="chars">Max. chars</label>
                  <input
                    id="chars"
                    type="text"
                    onChange={e =>
                      setData({ ...data, max_chars: e.target.value })
                    }
                  />
                </div>
              </div>
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
