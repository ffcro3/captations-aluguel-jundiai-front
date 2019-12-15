import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import PropertyForm from "../../components/PropertyForm";

import { Container, PageTitle } from "../../components/global";
import { BackGround } from "./styles";

export default function Property() {
  const [notLogged, setNotLogged] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentProperty, setCurrentProperty] = useState([]);
  const [exit] = useState([]);
  const history = useHistory();
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");

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

    async function loadProperty() {
      const token = await localStorage.getItem("@userIdentification");
      console.log(token);
      const response = await api
        .get(`/captations/${code}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .catch(function(error) {
          console.log(error.response.data);
        });

      if (response) {
        setCurrentProperty(response.data);
      }

      if (!response) {
        setCurrentProperty({
          error: "Property not found"
        });
      }
    }

    checkUser();
    loadProperty();
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
          <PageTitle>Imóvel: {code}</PageTitle>
          <Slider />
          <PropertyForm />
        </Container>
        <Footer />
      </BackGround>
    </>
  );
}
