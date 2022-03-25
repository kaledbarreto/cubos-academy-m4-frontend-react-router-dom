import React from "react";

import { Link } from "react-router-dom";

import './style.css';

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link to="/profile"><span>Meu Perfil</span></Link>
    </div>
  );
}

export default Home;