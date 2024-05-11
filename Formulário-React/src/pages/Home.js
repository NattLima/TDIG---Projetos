import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao nosso formulário de pesquisa!</p>
      <Link to="/formulario">Ir para o Formulário</Link>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Home;
