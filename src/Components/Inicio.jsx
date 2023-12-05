import React from "react";
import Greici from "../greici.png";
import { Img, Sessao, Div } from "../style/inicioStyle";
import Instagram from "../instagram.png";
import Linkedin from "../linkedin.png";
import Whats from "../whatsapp.png";
function Inicio() {
  return (
    <Sessao>
      <figure>
        <Img src={Greici} alt="Minha foto" />
      </figure>
      <Div>
        <h1>Olá eu sou a Greici</h1>
        <h3>Desenvolvedora Front-End</h3>
        <figure>
          <a href="https://www.instagram.com/greici.ofc/" target="_blank">
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/greicielle-silva-4b5221158/"
            target="_blank"
          >
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://web.whatsapp.com//">
            <img src={Whats} alt="" />
          </a>
          <a href="https://github.com/Greiciellepzr" target="_blank"></a>
        </figure>
      </Div>
    </Sessao>
  );
}

export default Inicio;
