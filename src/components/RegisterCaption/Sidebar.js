import React from "react";

import { Container, SideContainer, PhotoFrame, PhotoButton } from "./styles";

export default function SideBar() {
  return (
    <>
      <Container>
        <SideContainer>
          <PhotoFrame>
            <img
              src="https://i.imgur.com/rUnpC9b.png"
              alt="Add Property Images"
            />
          </PhotoFrame>
          <PhotoButton>
            <span>Adicionar Foto</span>
          </PhotoButton>
        </SideContainer>
      </Container>
    </>
  );
}
