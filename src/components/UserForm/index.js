import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import {
  FormContainer,
  FormRow,
  FormGroup,
  FormInputText,
  FormInputEmail,
  FormInputSelect,
  FormInputPassword,
  FormLabel,
  FormTitle,
  FormSendGroup,
  SendButton
} from "./styles";

export default function PropertyForm() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [password, setPassword] = useState([]);
  const [isBroker, setIsBroker] = useState([]);
  const [active, setActive] = useState([]);
  const url = new URL(window.location.href);
  const code = url.searchParams.get("id");
  const history = useHistory();

  useEffect(() => {
    async function loadUser() {
      const token = await localStorage.getItem("@userIdentification");
      const response = await api
        .get(`/users/${code}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .catch(function(error) {
          console.log(error.response.data);
        });

      if (response) {
        setName(response.data.name);
        setPhone(response.data.phone);
        setEmail(response.data.email);
        setActive(response.data.active);
        setIsBroker(response.data.isBroker);
      }

      if (!response) {
        setName("Usuário não encontrado");
        setPhone("Usuário não encontrado");
        setEmail("Usuário não encontrado");
        setActive("Usuário não encontrado");
        setIsBroker("Usuário não encontrado");
      }
    }
    loadUser();
  }, []);

  async function saveUser() {
    const token = await localStorage.getItem("@userIdentification");
    const response = await api
      .put(
        "/broker",
        {
          email,
          name,
          phone,
          isBroker,
          active
        },
        {
          token
        }
      )
      .catch(function(error) {
        console.log(error.response.data);
      });

    if (response) {
      alert(`${name} atualizado com sucesso!`);
      history.push("/admin/users");
    }

    if (!response) {
      alert(`Erro ao atualizar ${name}. Tente novamente.`);
    }
  }

  async function saveAdmin() {
    if (password.length <= 0) {
      return alert(
        "Para atualizar um usuário admin, você deve atualizar sua senha"
      );
    }
    const token = await localStorage.getItem("@userIdentification");
    const response = await api
      .put(
        "/user",
        {
          email,
          name,
          phone,
          password,
          isBroker,
          active
        },
        {
          token
        }
      )
      .catch(function(error) {
        console.log(error.response.data);
      });

    if (response) {
      alert(`${name} atualizado com sucesso!`);
      history.push("/admin/users");
    }

    if (!response) {
      alert(`Erro ao atualizar ${name}. Tente novamente.`);
    }
  }

  return (
    <>
      <FormContainer>
        <FormTitle>
          Dados do Usuário: <span style={{ color: "#4257d6" }}>{name}</span>
        </FormTitle>
        <FormRow>
          <FormGroup>
            <FormLabel>Nome:</FormLabel>
            <FormInputText
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            ></FormInputText>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <FormLabel>Telefone:</FormLabel>
            <FormInputText
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
              }}
            ></FormInputText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Email:</FormLabel>
            <FormInputEmail
              value={email}
              onChange={e => {
                setPhone(e.target.value);
              }}
            ></FormInputEmail>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <FormLabel>Status</FormLabel>
            <FormInputSelect
              onChange={e => {
                setActive(e.target.value);
              }}
            >
              {active === true ? (
                <>
                  <option value={true} selected>
                    Ativo
                  </option>
                  <option value={false}>Inativo</option>
                </>
              ) : (
                <>
                  <option value={true}>Ativo</option>
                  <option value={false} selected>
                    Inativo
                  </option>
                </>
              )}
            </FormInputSelect>
          </FormGroup>
          <FormGroup>
            <FormLabel>Tipo</FormLabel>
            <FormInputSelect
              onChange={e => {
                setIsBroker(e.target.value);
              }}
            >
              {isBroker === true || isBroker === "true" ? (
                <>
                  <option value={false} selected>
                    Corretor
                  </option>
                  <option value={true}>Admin</option>
                </>
              ) : (
                <>
                  <option value={true}>Corretor</option>
                  <option value={false} selected>
                    Admin
                  </option>
                </>
              )}
            </FormInputSelect>
          </FormGroup>
        </FormRow>
        {isBroker === "true" || isBroker === true ? (
          <>
            <FormRow>
              <FormSendGroup>
                <SendButton onClick={() => saveUser()}>Salvar</SendButton>
              </FormSendGroup>
            </FormRow>
          </>
        ) : (
          <>
            <FormRow>
              <FormGroup>
                <FormLabel>Senha:</FormLabel>
                <FormInputPassword
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormSendGroup>
                <SendButton onClick={() => saveAdmin()}>
                  Salvar Admin
                </SendButton>
              </FormSendGroup>
            </FormRow>
          </>
        )}
      </FormContainer>
    </>
  );
}
