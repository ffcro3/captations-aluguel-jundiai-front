import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { BackGround } from "./styles";

import api from "../../services/api";

export default class Admin extends Component {
  state = {
    notLogged: false
  };

  async componentWillMount() {
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
        notLogged: false
      });
    }

    if (!response) {
      this.setState({
        notLogged: true
      });
    }
  }

  render() {
    if (this.state.notLogged === true) {
      return <Redirect to="/admin?info=timeout"> </Redirect>;
    }
    return (
      <>
        <BackGround></BackGround>
      </>
    );
  }
}
