import React, { useState, useEffect } from "react";
import Painel from "../components/painel";
import ModelsBox from "./components/modelsBox";
import QuestionBox from "./components/questionBox";
import { useParams } from "react-router-dom";
import base from "../../config/api";

import "./style.css";

export default function Perfil(props) {
  const { id } = useParams();
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);
  const [model, setModel] = useState({ id: "", type: "" });

  useEffect(() => {
    base
      .get(`/user/${id}`)
      .then((res) => {
        setProfile(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <div className="box-content stripe-top">
        <Painel {...props} />
        <div className="col-70 box-list">
          {profile ? (
            <>
              {step == 0 ? (
                <div className="profile">
                  <div className="avatar"></div>
                  <div className="username">{profile.username}</div>
                  <button onClick={() => setStep(1)}>Enviar Pergunta</button>
                </div>
              ) : step == 1 ? (
                <ModelsBox
                  setStep={setStep}
                  setModel={setModel}
                  profile={profile}
                />
              ) : (
                <QuestionBox
                  setStep={setStep}
                  model={model}
                  profile={profile}
                />
              )}
            </>
          ) : loading ? (
            <div style={{ textAlign: "center" }}>
              <img src="/img/loading.gif" height="50px" />
            </div>
          ) : (
            "user not found"
          )}
        </div>
      </div>
    </div>
  );
}
