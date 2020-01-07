import React from "react";

import { HeroContainer, HeroDivider, HeroRow, HeroDividerImage } from "./styles";

export default function Hero() {
  return (
    <>
    <HeroContainer>
      <HeroRow>
        <HeroDivider>
        <span>Lorem Ipsum dolor</span>
        <span>sit a met</span>
        <small>
        lorem ipsum dolor sit a met constructec
        </small>
        </HeroDivider>
        <HeroDividerImage>
        <img src="https://i.imgur.com/tzfho6F.png" alt="Aluguel Jundiaí Logotipo" />
        </HeroDividerImage>
      </HeroRow>
    </HeroContainer>
    </>
  );
}
