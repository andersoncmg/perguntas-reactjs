import React from "react";
import "./style.css";
import Painel from "../../components/painel";

export default function index(props) {
  return (
    <div className="container">
      <div className="box-content stripe-top">
        <Painel {...props} />
        <div className="col-70 box-list">
          <ul>
            <li className="list-item">
              <div className="model-info">
                <h4>Titulo do modelo</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
                <span>[tag1 , tag2 tag3]</span>
              </div>
              <div className="price">
                <span>R$ </span>5,99
              </div>
              <button>manage</button>
            </li>
            <li className="list-item">
              <div className="model-info">
                <h4>Mais um do modelo</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
                <span>[tag1 , tag2 tag3]</span>
              </div>
              <div className="price">
                <span>R$ </span>5,99
              </div>
              <button>manage</button>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
}
