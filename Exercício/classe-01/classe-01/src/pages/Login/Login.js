import React from "react";
import { useHistory } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import './style.css';

function Login() {
  const auth = useAuth();
  const history = useHistory();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => auth.logar(() => history.push("/profile"))}>
        Entrar
      </button>
    </div>
  );
}

export default Login;
