import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import Header from "../../components/Header";

import { Container, PageTitle } from "../../components/global";
import { BackGround } from "./styles";

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
          <PageTitle>Captações</PageTitle>
        </Container>
      </BackGround>
    </>
  );
}
