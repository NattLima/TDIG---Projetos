import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>
        Bem-vindo ao nosso <a href="/formulario">formulário</a> de pesquisa!
      </p>
    </div>
  );
}

export default Home;
