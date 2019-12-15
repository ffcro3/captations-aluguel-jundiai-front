import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { FaUserCog, FaMailBulk, FaFileExcel } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Container, PageTitle } from "../../components/global";

import {
  BackGround,
  SettingsContainer,
  SettingsLogo,
  IconContainer,
  TextContainer
} from "./styles";
import { width } from "dom-helpers";

export default function Captations() {
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
  return (
    <>
      <BackGround>
        <Header />
        <Container>
          <PageTitle>Configurações</PageTitle>
          <SettingsLogo />
          <SettingsContainer>
            <IconContainer>
              <FaUserCog
                style={{ color: "#147d4e", height: "50px", width: "auto" }}
              />
            </IconContainer>
            <TextContainer>
              <span>Usuários</span>
              <small>
                Crie, edite, exclua usuários (Usuários do sistema e Corretores).
              </small>
            </TextContainer>
          </SettingsContainer>

          <SettingsContainer>
            <IconContainer>
              <FaMailBulk
                style={{ color: "#147d4e", height: "50px", width: "auto" }}
              />
            </IconContainer>
            <TextContainer>
              <span>STMP</span>
              <small>Altere informações sobre envio, e-mail e senha.</small>
            </TextContainer>
          </SettingsContainer>

          <SettingsContainer>
            <IconContainer>
              <MdDeleteForever
                style={{ color: "#147d4e", height: "50px", width: "auto" }}
              />
            </IconContainer>
            <TextContainer>
              <span>Arquivos</span>
              <small>
                Sua aplicação está pesada? Exlua fotos de imóveis que já foram
                direcionados.
              </small>
            </TextContainer>
          </SettingsContainer>

          <SettingsContainer>
            <IconContainer>
              <FaFileExcel
                style={{ color: "#147d4e", height: "50px", width: "auto" }}
              />
            </IconContainer>
            <TextContainer>
              <span>Relatórios</span>
              <small>
                Exporte relatórios do sistema: Relatórios geral, relatórios de
                enviados e relatórios de pendentes.
              </small>
            </TextContainer>
          </SettingsContainer>
        </Container>
        <Footer />
      </BackGround>
    </>
  );
}
