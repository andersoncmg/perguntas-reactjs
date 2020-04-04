import React, { useState } from "react";
import style from "./style.css";
import Login from "./components/login";
import Register from "./components/register";

export default function Home(props) {
  const [switcher, setSwitcher] = useState(0);

  return (
    <div className="container back-img">
      <div className="content-bottom">
        <div className="box-options">
          {switcher == 0 ? (
            <>
              <button onClick={() => setSwitcher(1)}>Entrar</button>
              <button onClick={() => setSwitcher(2)}>Cadastrar</button>
            </>
          ) : switcher == 1 ? (
            <Login {...props} setSwitcher={setSwitcher} />
          ) : (
            <Register {...props} setSwitcher={setSwitcher} />
          )}
        </div>
        <span
          style={
            switcher == 1
              ? { paddingTop: "190px" }
              : switcher == 2
              ? { paddingTop: "290px" }
              : { paddingTop: "150px" }
          }
        >
          O lugar para conhecer melhor aquela pessoa
        </span>
        <div className="home-footer">
          Perguntas.com 2020 @ Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
}
