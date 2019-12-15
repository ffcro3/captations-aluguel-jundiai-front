import React, { Component } from "react";
import {
  BackGround,
  Container,
  Header,
  Logo,
  Title,
  Form,
  InputEmail,
  InputPassword,
  CreateAccount,
  LoginButton,
  ErrorMessage,
  ErrorTitle
} from "./styles";

import api from "../../services/api";

export default class Admin extends Component {
  state = {
    email: null,
    password: null,
    error: null
  };

  async componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const info = query.get("info");
    const alreadyLogged = await localStorage.getItem("@userIdentification");
    if (alreadyLogged) {
      const homepath = `/admin/captations`;
      this.props.history.push(homepath);
    }

    await this.setState({
      error: info
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const response = await api
      .post("/session", {
        email: this.state.email,
        password: this.state.password
      })
      .catch(function(error) {
        console.log(error.response.data);
        if (
          error.response.data.error ===
          "Email and password are requireds. Please check these fields and try again"
        ) {
          alert("Campos com erros. Veirifique e tente novamente");
        }

        if (error.response.data.error === "User does not exist") {
          alert("Usuário não encontrado");
        }

        if (error.response.data.error === "Password invalid") {
          alert("Senha inválida");
        }
      });

    if (response) {
      const token = response.data.token;
      localStorage.setItem("@userIdentification", token);
      const homepath = `/admin/captations`;
      this.props.history.push(homepath);
    }
  }

  render() {
    const { error } = this.state;
    return (
      <>
        <BackGround>
          <Container>
            <Header>
              <Logo />
              <Title>Gerenciamento de Captações</Title>
            </Header>
            <Form>
              <InputEmail
                onChange={e => {
                  this.setState({
                    email: e.target.value
                  });
                }}
                autoComplete={true}
              />
              <InputPassword
                onChange={e => {
                  this.setState({
                    password: e.target.value
                  });
                }}
                autoComplete={true}
              />
              <LoginButton onClick={e => this.handleSubmit(e)}>
                Entrar
              </LoginButton>
              <CreateAccount>Criar Conta</CreateAccount>
              <CreateAccount>Esqueceu a senha?</CreateAccount>
              {error === "timeout" ? (
                <ErrorMessage>
                  <ErrorTitle>
                    Tempo de inatividade limite. <br />
                    Faça o login novamente.
                  </ErrorTitle>
                </ErrorMessage>
              ) : (
                ""
              )}

              {error === "signout" ? (
                <ErrorMessage>
                  <ErrorTitle>Desconectado com sucesso</ErrorTitle>
                </ErrorMessage>
              ) : (
                ""
              )}
            </Form>
          </Container>
        </BackGround>
      </>
    );
  }
}
