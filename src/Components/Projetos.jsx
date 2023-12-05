import React from "react";
import { Img, Container, Sessao } from "../style/projetosStyle";

function Projetos() {
  return (
    <section>
      <h2>Projetos</h2>
      <Sessao>
        <Container>
          <figure>
            <a
              href="https://mariaccarolina.github.io/Adote-me/"
              target="_blank"
            ></a>
          </figure>
          <h2>Adote-me</h2>
          <h3>Descrição</h3>
          <p>REACT, JAVASCRIPT, STYLED COMPONENTS</p>
        </Container>

        <Container>
          <figure>
            <a
              href="https://github.com/Greiciellepzr/Adote-me/"
              target="_blank"
            ></a>
          </figure>
          <h2>Adote-me</h2>
          <h3>Descrição</h3>
          <p>REACT, JAVASCRIPT, STYLED COMPONENTS</p>
        </Container>
      </Sessao>
    </section>
  );
}
export default Projetos;
