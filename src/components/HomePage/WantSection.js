import React from "react";
import { useHistory } from "react-router-dom";

import {
  WantContainer,
  WantTitle,
  WantSubTitle,
  WantButton
} from "../../components/HomePage/styles";

export default function WantSection() {
  const history = useHistory();

  function goTo(page) {
    history.push(`/${page}`);
  }

  return (
    <>
      <WantContainer>
        <WantTitle>Quer alugar ou vender seu imóvel com facilidade?</WantTitle>
        <WantSubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </WantSubTitle>
        <WantButton onClick={() => goTo("register-property")}>
          Quero anunciar meu imóvel!
        </WantButton>
      </WantContainer>
    </>
  );
}
