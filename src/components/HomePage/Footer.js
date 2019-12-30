import React from "react";

import {
  FooterContainer,
  FooterMain,
  FooterSub,
  FooterSubContainer
} from "../../components/HomePage/styles";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterMain>
          <FooterSubContainer>
            <img
              src="https://i.imgur.com/tzfho6F.png"
              alt="Aluguel Jundiaí - Logotipo Rodapé"
            />
          </FooterSubContainer>
          <FooterSubContainer>
            <span>CONTATO:</span>
            <span>Rua Dr. Antenor Soares Gandra, 1253, Colônia</span>
            <span>Jundiaí - São Paulo</span>
            <span>CEP 13218-111</span>
            <span>(11) 4807-0111 | (11) 4586 - 3434</span>
            <span>(11) 95328-9931</span>
            <span>@ contato@alugueljundiai.com.br</span>
          </FooterSubContainer>
          <FooterSubContainer>
            <span>SIGA-NOS:</span>
            <span>
              <img
                src="https://i.imgur.com/fgoQH8R.png"
                className="icon"
                alt="Facebook ícone"
              />
              <img
                src="https://i.imgur.com/IB4Sp86.png"
                className="icon"
                alt="Facebook ícone"
              />
              <img
                src="https://i.imgur.com/WlHa3wx.png"
                className="icon"
                alt="Facebook ícone"
              />
              <img
                src="https://i.imgur.com/0KmugBE.png"
                className="icon"
                alt="Facebook ícone"
              />
              <img
                src="https://i.imgur.com/npKPbL0.png"
                className="icon"
                alt="Facebook ícone"
              />
              <img
                src="https://i.imgur.com/NmE02zv.png"
                className="icon"
                alt="Facebook ícone"
              />
            </span>
            <span />
            <span>ACESSE NOSSO BLOG:</span>
            <span>http://alugueljundiaiimoveis.blogspot.com.br/</span>
          </FooterSubContainer>
        </FooterMain>
        <FooterSub>
          developed with ♥ and JS - {"  "}
          <a href="https://girojundiai.com.br" target="_blank">
            FFCRO3
          </a>
        </FooterSub>
      </FooterContainer>
    </>
  );
}
