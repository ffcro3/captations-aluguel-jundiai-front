import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserForm from "../../components/UserForm";

import { Container } from "../../components/global";
import { BackGround, BackButton } from "./styles";

export default function User() {
  const [notLogged, setNotLogged] = useState([]);
  const [loading, setLoading] = useState([]);
  const [exit] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);

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
    setLoading(false);
  }, []);

  if (notLogged === true) {
    history.push("/admin?info=timeout");
  }
  if (exit === true) {
    history.push("/admin?info=signout");
  }
  if (loading) {
    return (
      <>
        <h1>Carregando...</h1>
      </>
    );
  }

  return (
    <>
      <BackGround>
        <Header />
        <Container>
          <BackButton onClick={() => history.goBack()}>← Voltar</BackButton>
          <UserForm />
        </Container>
        <Footer />
      </BackGround>
    </>
  );
}
