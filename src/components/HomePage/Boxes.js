import React from "react";
import {useHistory} from 'react-router-dom';

import { BoxContainer, Box, BoxTitle, BoxSubTitle } from "./styles";

export default function HomePage() {
  const history = useHistory();

  return (
    <BoxContainer>
      <Box onClick={() => history.push('/register-property?type=apartament')}>
        <BoxSubTitle>Tenho um</BoxSubTitle>
        <BoxTitle>Apartamento</BoxTitle>
      </Box>
      <Box onClick={() => history.push('/register-property?type=house')}>
        <BoxSubTitle>Tenho uma</BoxSubTitle>
        <BoxTitle>Casa</BoxTitle>
      </Box>
      <Box onClick={() => history.push('/register-property?type=comercial')}>
        <BoxSubTitle>Tenho um imóvel</BoxSubTitle>
        <BoxTitle>Comercial</BoxTitle>
      </Box>
    </BoxContainer>
  );
}
