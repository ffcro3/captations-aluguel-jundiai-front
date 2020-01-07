import React from "react";
import { useHistory } from 'react-router-dom';

import {
  ImageSelectionContainer,
  ImageContainer,
  Image,
  ImageText,
  ImageButton
} from "./styles";

export default function ImageSelection() {
  const history = useHistory();
  return (
    <>
      <ImageSelectionContainer>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <ImageContainer>
          <ImageText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ImageText>
          <ImageButton onClick={() => history.push('/register-property')}>
            <span>Saiba mais</span>
          </ImageButton>
        </ImageContainer>
      </ImageSelectionContainer>
    </>
  );
}
