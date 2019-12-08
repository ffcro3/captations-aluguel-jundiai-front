import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { BackGround } from "./styles";

import api from "../../services/api";
import Header from "../../components/Header";

import {
  NavBar,
  DivHeader,
  Container,
  PageTitle
} from "../../components/global";

import ImageHeader from "../../assets/logo512.png";

export default class Admin extends Component {
  state = {
    notLogged: false,
    exit: false,
    loading: false
  };

  async componentWillMount() {
    this.setState({
      loading: true
    });

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
      this.setState({
        notLogged: false,
        loading: false
      });
    }

    if (!response) {
      this.setState({
        notLogged: true
      });
    }
  }

  refreshPage() {
    window.location.reload();
  }

  async handleExit() {
    localStorage.removeItem("@userIdentification");
    await this.setState({
      exit: true
    });
  }

  render() {
    if (this.state.notLogged === true) {
      return <Redirect to="/admin?info=timeout"> </Redirect>;
    }
    if (this.state.exit === true) {
      return <Redirect to="/admin?info=signout"> </Redirect>;
    }
    if (this.state.loading === true) {
      return <> </>;
    }
    return (
      <>
        <BackGround>
          <Header />
          <Container>
            <PageTitle>Captações Enviadas</PageTitle>
          </Container>
        </BackGround>
      </>
    );
  }
}
