import React from "react";
import "./style.css";
import Painel from "../../components/painel";

export default function index(props) {
  return (
    <div className="container">
      <div className="box-content stripe-top">
        <Painel {...props} />
        <div className="col-70 box-form">
          <div className="bar-title">Criar novo modelo de pergunta</div>
          <div className="form-box">
            <form>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea
                  name=""
                  id="description"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="input-group">
                <input id="r-1" type="radio" name="tipo" />
                <label htmlFor="r-1">Multipla Escolha</label>
                <input id="r-2" type="radio" name="tipo" />
                <label htmlFor="r-2">Texto</label>
              </div>
              <div className="form-group">
                <label htmlFor="value">valor</label>
                <input id="value" type="text" />
              </div>
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
