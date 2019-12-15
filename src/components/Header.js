import React from "react";
import { useHistory } from "react-router-dom";

import { NavBar, DivHeader } from "./global";
import ImageHeader from "../assets/logo512.png";

export default function Header() {
  const history = useHistory();

  function handlePage(page) {
    history.push(`/admin/${page}`);
  }

  async function exit() {
    await localStorage.removeItem("@userIdentification");
    history.push(`/admin?info=signout`);
  }

  return (
    <>
      <NavBar>
        <DivHeader onClick={() => handlePage("captations")}>
          <img src={ImageHeader} alt="" />
          <span>Central de Captações - Aluguel Jundiaí</span>
        </DivHeader>
        <DivHeader></DivHeader>
        <DivHeader>
          <ul>
            <li onClick={() => handlePage("captations")}>Captações</li>
            <li onClick={() => handlePage("sent")}>Enviadas</li>
            <li onClick={() => handlePage("settings")}>Configurações</li>
            <li onClick={() => exit()}>Sair</li>
          </ul>
        </DivHeader>
      </NavBar>
    </>
  );
}
