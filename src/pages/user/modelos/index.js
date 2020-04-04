import React, { useState, useEffect } from "react";
import "./style.css";
import Painel from "../../components/painel";
import base from "../../../config/api";

export default function Modelos(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base
      .get("/question-models")
      .then(res => {
        setModelsList(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const [modelsList, setModelsList] = useState([]);

  return (
    <div className="container">
      <div className="box-content stripe-top">
        <Painel {...props} />
        <div className="col-70 box-list">
          <ul>
            {!loading ? (
              <>
                {modelsList.map(item => (
                  <li key={item.id} className="list-item">
                    <div className="model-info">
                      <h4>{item.title}</h4>
                      {item.description ? <p>{item.description}</p> : ""}
                      <span>{`Tipo: ${
                        item.type == "text" ? "Texto" : "Multipla Escolha"
                      }, Maximo de Caracteres: ${item.max_chars}`}</span>
                    </div>
                    <div className="price">
                      <span>R$ </span>
                      {item.price ? item.price : "Grátis"}
                    </div>
                    <button
                      className="manage-button"
                      onClick={() =>
                        props.history.push(`/editar-modelo/${item.id}`)
                      }
                    >
                      manage
                    </button>
                  </li>
                ))}
              </>
            ) : (
              <div style={{ textAlign: "center" }}>
                <img src="/img/loading.gif" height="50px" />
              </div>
            )}
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
}
