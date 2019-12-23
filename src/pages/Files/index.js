import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chart from "../../components/Charts/Files/Size";

import { TiDeleteOutline } from "react-icons/ti";
import { Container, PageTitle } from "../../components/global";

import {
  BackGround,
  SettingsContainer,
  SettingsLogo,
  IconContainer,
  TextContainer,
  ChartTitle
} from "./styles";
import { width } from "dom-helpers";

export default function Files() {
  const [notLogged, setNotLogged] = useState([]);
  const [exit] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function checkUser() {
      const token = await localStorage.getItem("@userIdentification");
      const response = await api
        .post("/session/verify", {
          token
        })
        .catch(function(error) {
          console.log(error.response.data);
          if (error.response.data.message === "jwt expired") {
            localStorage.removeItem("@userIdentification");
          }
          if (error.response.data.message === "jwt must be provided") {
          }
        });

      if (response) {
        setNotLogged(false);
      }

      if (!response) {
        setNotLogged(true);
      }
    }
    checkUser();
  });

  if (notLogged === true) {
    history.push("/admin?info=timeout");
  }
  if (exit === true) {
    history.push("/admin?info=signout");
  }

  function goTo(page) {
    history.push(`/admin/${page}`);
  }
  return (
    <>
      <BackGround>
        <Header />
        <Container>
          <PageTitle>Configurações</PageTitle>
          <SettingsLogo />
          <ChartTitle>Espaço utilizado</ChartTitle>
          <Chart />
          <SettingsContainer onClick={() => alert("excluído")}>
            <IconContainer>
              <TiDeleteOutline
                style={{ color: "#147d4e", height: "50px", width: "auto" }}
              />
            </IconContainer>
            <TextContainer>
              <span>Excluir Fotos</span>
              <small>clique aqui para excluir as fotos da aplicação.</small>
            </TextContainer>
          </SettingsContainer>
        </Container>
        <Footer />
      </BackGround>
    </>
  );
}
