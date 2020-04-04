import React, { useState, useEffect } from "react";
import base from "../../../config/api";

export default function Register(props) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    r_password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    setLoading(true);
    e.preventDefault();
    base
      .post("/register", data)
      .then(async res => {
        await localStorage.setItem("token", res.data.token);
        await localStorage.setItem("username", res.data.username);
        await props.history.push("/meus-modelos");
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="form-box">
      {!loading ? (
        <>
          <form className="form-login" onSubmit={e => handleSubmit(e)}>
            <input
              type="text"
              placeholder="Username"
              value={data.username}
              onChange={e => setData({ ...data, username: e.target.value })}
            />
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
            <input
              type="text"
              placeholder="Confirmar Senha"
              value={data.r_password}
              onChange={e => setData({ ...data, r_password: e.target.value })}
            />
            <button>Cadastrar</button>
            <button onClick={() => props.setSwitcher(0)} className="back">
              Voltar
            </button>
          </form>
        </>
      ) : (
        <img src="/img/loading.gif" height="50px" />
      )}
    </div>
  );
}
