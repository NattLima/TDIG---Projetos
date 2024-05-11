import React from "react";
import "../App.css"; 

function Formulario() {
  return (
    <div className="container">
      <div className="form-container">
        <h1>Formulário de Pesquisa</h1>
        <form>
          <fieldset>
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Digite o seu Nome"
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Digite seu email"
            />

            <label htmlFor="number">Idade:</label>
            <input
              id="number"
              type="number"
              name="number"
              placeholder="Idade"
              min="5"
              max="99"
            />

            <label htmlFor="period">Período: (opcional)</label>
            <input
              id="period"
              type="number"
              name="period"
              min="1"
              max="12"
              placeholder="Digite seu período atual no curso"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="dropdown">
              Qual das opções melhor descreve sua ocupação atual?
            </label>
            <select id="dropdown">
              <option value="">Selecione uma opção</option>
              <option value="Estudante">Estudante</option>
              <option value="Trabalha">Trabalha</option>
              <option value="Trabalha e Estuda">Trabalha e Estuda</option>
              <option value="Prefere não informar">Prefere não informar</option>
              <option value="Outro">Outro</option>
            </select>
          </fieldset>
          <fieldset>
            <label>Você está satisfeito com o curso de Computação?</label>
            <div>
              <label>
                <input type="radio" name="Satisfacao" value="Sim" /> Sim
              </label>
              <label>
                <input type="radio" name="Satisfacao" value="MeioTermo" /> Meio
                termo
              </label>
              <label>
                <input type="radio" name="Satisfacao" value="Nao" /> Não
              </label>
            </div>
          </fieldset>
          <fieldset>
            <label>
              O que você gostaria que melhorasse? (Marque quantas quiser!)
            </label>
            <div>
              <label>
                <input type="checkbox" name="melhoria" value="More Projects" />{" "}
                Mais Projetos
              </label>
              <label>
                <input type="checkbox" name="melhoria" value="Opportunities" />{" "}
                Mais Oportunidades
              </label>
              <label>
                <input
                  type="checkbox"
                  name="melhoria"
                  value="Teaching Qualities"
                />{" "}
                Qualidade de Ensino
              </label>
              <label>
                <input
                  type="checkbox"
                  name="melhoria"
                  value="Classroom Quality"
                />{" "}
                Qualidade das Salas de Aula
              </label>
              <label>
                <input
                  type="checkbox"
                  name="melhoria"
                  value="Student Support"
                />{" "}
                Atendimento aos Alunos
              </label>
              <label>
                <input type="checkbox" name="melhoria" value="Others" /> Outro
              </label>
            </div>
          </fieldset>
          <label htmlFor="comments">Comentários?</label>
          <textarea
            id="comments"
            name="comments"
            rows="3"
            placeholder="Comentários extras"
          ></textarea>
          <input type="submit" value="Enviar" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
