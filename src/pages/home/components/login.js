import React, { useState } from "react";
import "./login.css";
import base from "../../../config/api";

export default function Login(props) {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    base
      .post("/login", data)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        window.location.href = "/meus-modelos";
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="form-box">
      {!loading ? (
        <form
          className="form-login"
          onSubmit={e => {
            handleSubmit(e);
            setLoading(true);
          }}
        >
          <input
            type="text"
            placeholder="Email"
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Senha"
            value={data.password}
            onChange={e => setData({ ...data, password: e.target.value })}
          />
          <button>Entrar</button>
          <button onClick={() => props.setSwitcher(0)} className="back">
            Voltar
          </button>
        </form>
      ) : (
        <img src="/img/loading.gif" height="50px" />
      )}
    </div>
  );
}
