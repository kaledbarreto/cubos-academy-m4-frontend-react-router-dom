import React from "react";

import { Link, useHistory } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import './style.css';

function Profile() {
  const auth = useAuth();
  const history = useHistory();

  return (
    <div>
      <h1>Meu Perfil</h1>
      <span>Bem-Vindo(a)</span>
      <Link to="/">Voltar ao início</Link>
      <button onClick={() => auth.deslogar(() => history.push("/"))}>
        Deslogar
      </button>
    </div>
  );
}

export default Profile;
