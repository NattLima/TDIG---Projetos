import React from "react";
import Navbar from "../../Navbar";
import "./home.css";

const Home = () => {
  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Navbar />
      <div className="Home-App">
        <main className="cards">
          <section className="card tdig">
            <h3>TDIG Projetos</h3>
            <span>
              Projetos da disciplina de Tecnologias de Desenvolvimento de
              Interface Gráfica - UEPB turma 2024.1
            </span>
            <button
              onClick={() =>
                redirectTo("https://github.com/NattLima/TDIG---Projetos")
              }
            >
              Saiba mais
            </button>
          </section>

          <section className="card map">
            <h3>MAP Projetos</h3>
            <span>
              Projetos da disciplina de Metodos avançados em programação da
              turma 2023.1 (Sistema de Marketplace)
            </span>
            <button
              onClick={() => redirectTo("https://github.com/NattLima/MAP")}
            >
              Saiba mais
            </button>
          </section>
          <section className="card compiladores">
            <h3>Compiladores Projetos</h3>
            <span>
              Projeto desenvolvido para a disciplina de compiladores da UEPB
              turma 2023.1
            </span>
            <button
              onClick={() =>
                redirectTo("https://github.com/NattLima/Projeto-Compiladores")
              }
            >
              Saiba mais
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
