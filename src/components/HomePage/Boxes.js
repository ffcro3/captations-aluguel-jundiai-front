import React from "react";

import { BoxContainer, Box, BoxTitle, BoxSubTitle } from "./styles";

export default function HomePage() {
  return (
    <BoxContainer>
      <Box>
        <BoxSubTitle>Tenho um</BoxSubTitle>
        <BoxTitle>Apartamento</BoxTitle>
      </Box>
      <Box>
        <BoxSubTitle>Tenho uma</BoxSubTitle>
        <BoxTitle>Casa</BoxTitle>
      </Box>
      <Box>
        <BoxSubTitle>Tenho um imóvel</BoxSubTitle>
        <BoxTitle>Comercial</BoxTitle>
      </Box>
    </BoxContainer>
  );
}
