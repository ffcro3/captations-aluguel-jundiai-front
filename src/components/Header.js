import React, { Component } from "react";
import { Redirect, Router } from "react-router-dom";
import { browserHistory } from "react-router";

import api from "../services/api";
import Routes from "../routes";
import history from "../services/history";

import { NavBar, DivHeader } from "./global";

import ImageHeader from "../assets/logo512.png";

export default class Admin extends Component {
  state = {
    notLogged: false,
    exit: false,
    loading: false,
    page: null
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

  handlePage(page) {
    this.setState({
      page: page
    });
  }

  async handleExit() {
    localStorage.removeItem("@userIdentification");
    await this.setState({
      exit: true
    });
  }

  render() {
    if (this.state.page) {
      switch (this.state.page) {
        case "captations":
          return <Redirect to="/admin/captations" />;
          break;

        case "sent":
          return <Redirect to="/admin/sent" />;
          break;

        case "settings":
          return <Redirect to="/admin/settings" />;
          break;
        default:
          break;
      }
    }
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
        <NavBar>
          <DivHeader onClick={() => this.refreshPage()}>
            <img src={ImageHeader} alt="" />
            <span>Central de Captações - Aluguel Jundiaí</span>
          </DivHeader>
          <DivHeader></DivHeader>
          <DivHeader>
            <ul>
              <li onClick={() => this.handlePage("captations")}>Captações</li>
              <li onClick={() => this.handlePage("sent")}>Enviadas</li>
              <li onClick={() => this.handlePage("settings")}>Configurações</li>
              <li onClick={() => this.handleExit()}>Sair</li>
            </ul>
          </DivHeader>
        </NavBar>
      </>
    );
  }
}
