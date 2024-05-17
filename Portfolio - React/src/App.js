import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div>
      <section
        id="welcome-section"
        className="d-flex flex-column justify-content-center align-items-center text-center vh-20"
      >
        <h1>Olá, sou Natália Lima</h1>
        <h2 id="subtext" className="fst-italic">
          Sou estudante de Ciência da Computação, tenho 23 anos, moro em Campina
          Grande, e iniciei minha jornada no curso em 2019.
        </h2>
      </section>

      <section
        id="projects"
        className="d-flex flex-column justify-content-center align-items-center text-center vh-20"
      >
        <h1>Esses são alguns dos meus projetos:</h1>
        <div id="grade-projects">
          <figure>
            <a
              href="https://github.com/NattLima/TDIG---Projetos/tree/main/Tribute%20Page"
              className="menu__link"
              target="_blank"
            >
              Página de Tributo!
            </a>
          </figure>
          <figure>
            <a
              href="https://github.com/NattLima/TDIG---Projetos/tree/main/Survey%20Form"
              className="menu__link"
              target="_blank"
            >
              Formulário (HTML+CSS)
            </a>
          </figure>
          <figure>
            <a
              href="https://github.com/NattLima/TDIG---Projetos/tree/main/Formul%C3%A1rio--React%20(Survey%20Form)"
              className="menu__link"
              target="_blank"
            >
              Formulário (React)
            </a>
          </figure>
        </div>
      </section>

      <section
        id="contact"
        className="d-flex flex-column justify-content-center align-items-center text-center vh-40"
      >
        <h1>Vamos trabalhar juntos? ;)</h1>
        <p className="fst-italic">How do you take your coffee?</p>
        <a
          className="menu__link mt-3"
          href="https://github.com/NattLima"
          target="_blank"
        >
          Github
        </a>
      </section>

      <footer
        id="footer"
        className="d-flex flex-column justify-content-center align-items-center text-center p-1"
      >
        <p>
          **Esse é apenas um simples portfólio. Para a disciplina de TDIG do
          curso de CC-UEPB.
        </p>
        <p>© Created for TDIG</p>
      </footer>
    </div>
  );
}

export default App;
