import React from "react";
import "./style.css";
import Painel from "../components/painel";

export default function index(props) {
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
                <li className="list-item">
                  <div className="question-box">
                    <strong>Quais seus hobies favoritos?</strong>
                    <p>Aguardando Resposta...</p>
                    <span>
                      Para: <a href="#">Fernando</a>
                    </span>
                  </div>
                  <div className="options-box">
                    <a href="#">Arquivar</a>
                    <div className="paid-value">4,99</div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="question-box">
                    <strong>Quantos anus vc tem?</strong>
                    <p>Não te interesss</p>
                    <span>
                      Para: <a href="#">Fernando</a>
                    </span>
                  </div>
                  <div className="options-box">
                    <a href="#">Arquivar</a>
                    <div className="paid-value">40,00</div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="question-box">
                    <strong>Quais seus hobies favoritos?</strong>
                    <p>Aguardando Resposta...</p>
                    <span>
                      Para: <a href="#">Fernando</a>
                    </span>
                  </div>
                  <div className="options-box">
                    <a href="#">Arquivar</a>
                    <div className="paid-value">4,99</div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="question-box">
                    <strong>Quais seus hobies favoritos?</strong>
                    <p>
                      Rejeitada
                      <small> (O valor foi estornado para sua conta)</small>
                    </p>
                    <span>
                      Para: <a href="#">Fernando</a>
                    </span>
                  </div>
                  <div className="options-box">
                    <a href="#">Arquivar</a>
                    <div className="paid-value">0,00</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
