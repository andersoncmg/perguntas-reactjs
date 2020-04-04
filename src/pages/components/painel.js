import React, { useEffect, useState } from "react";
import "./painel.css";
import base from "../../config/api";

export default function Painel(props) {
  return (
    <div className="col-30 box-user">
      <div className="userinfo">
        <div className="avatar">
          <img
            src="data:image/jpeg;base64,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"
            alt="username"
          />
        </div>
        <div className="username">
          <strong>{localStorage.getItem("username")}</strong>
          <span>Perguntador</span>
        </div>
      </div>
      <div className="menu">
        <ul>
          <li className="menu-title">Perguntas</li>
          <ul>
            <li
              className={
                props.history.location.pathname == "/perguntas"
                  ? "selected"
                  : ""
              }
              onClick={() => props.history.push("/perguntas")}
            >
              Enviadas
            </li>
            <li
              className={
                props.history.location.pathname == "/respostas"
                  ? "selected"
                  : ""
              }
              onClick={() => props.history.push("/respostas")}
            >
              Recebidas
            </li>
            <li
              className={
                props.history.location.pathname == "/usuarios" ? "selected" : ""
              }
              onClick={() => props.history.push("/usuarios")}
            >
              Usuarios
            </li>
          </ul>
          <li className="menu-title">Modelos</li>
          <ul>
            <li
              className={
                props.history.location.pathname == "/meus-modelos"
                  ? "selected"
                  : ""
              }
              onClick={() => props.history.push("/meus-modelos")}
            >
              Meus Modelos
            </li>
            <li
              className={
                props.history.location.pathname == "/novo-modelo"
                  ? "selected"
                  : ""
              }
              onClick={() => props.history.push("/novo-modelo")}
            >
              Criar Modelos
            </li>
          </ul>
          <a
            onClick={() => {
              localStorage.removeItem("username");
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Logout
          </a>
        </ul>
      </div>
    </div>
  );
}
