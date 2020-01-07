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
            <a href="tel:11480701111">(11) 4807-0111 | (11) 4586-3434</a>
            <a href="tel:11953289931">(11) 95328-9931</a>
            <a href="mailto:contato@alugueljundiai.com.br">@ contato@alugueljundiai.com.br</a>
          </FooterSubContainer>
          <FooterSubContainer>
            <span>SIGA-NOS:</span>
            <span>
              <a href="https://www.facebook.com/aluguelemjundiai" target="_blank"><img
                src="https://i.imgur.com/fgoQH8R.png"
                className="icon"
                alt="Facebook ícone"
              /></a>
              <a href="https://twitter.com/alugueljundiai" target="_blank"><img
                src="https://i.imgur.com/IB4Sp86.png"
                className="icon"
                alt="Twitter ícone"
              /></a>
              <a href="https://plus.google.com/u/0/%20AluguelJundiai/posts" target="_blank"><img
                src="https://i.imgur.com/WlHa3wx.png"
                className="icon"
                alt="Google Plus ícone"
              /></a>
              <a href="https://www.instagram.com/alugueljundiai/" target="_blank"><img
                src="https://i.imgur.com/0KmugBE.png"
                className="icon"
                alt="Instagram ícone"
              /></a>
              <a href="https://www.youtube.com/channel/UCacnM9JZ0jn6kQ4GMNB7tqQ" target="_blank"><img
                src="https://i.imgur.com/npKPbL0.png"
                className="icon"
                alt="Youtube ícone"
              /></a>
            <a href="http://alugueljundiaiimoveis.blogspot.com/" target="_blank"><img
              src="https://i.imgur.com/NmE02zv.png"
              className="icon"
              alt="Blogger ícone"
            /></a>
            </span>
          <span />
          <span>ACESSE NOSSO BLOG:</span>
          <a href="http://alugueljundiaiimoveis.blogspot.com.br/" target="_blank">http://alugueljundiaiimoveis.blogspot.com.br/</a>
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
