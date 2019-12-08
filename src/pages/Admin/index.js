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
  LoginButton
} from "./styles";

export default class Admin extends Component {
  render() {
    return (
      <>
        <BackGround>
          <Container>
            <Header>
              <Logo />
              <Title>Gerenciamento de Captações</Title>
            </Header>
            <Form>
              <InputEmail />
              <InputPassword />
              <LoginButton>Entrar</LoginButton>
              <CreateAccount>Criar Conta</CreateAccount>
              <CreateAccount>Esqueceu a senha?</CreateAccount>
            </Form>
          </Container>
        </BackGround>
      </>
    );
  }
}
