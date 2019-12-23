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
  FormInputNumber,
  FormLabel,
  FormTitle,
  FormSendGroup,
  SendButton
} from "./styles";

export default function PropertyForm() {
  const [host, setHost] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [port, setPort] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadSMTP() {
      const token = await localStorage.getItem("@userIdentification");
      const response = await api
        .get(`/smtp`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .catch(function(error) {
          console.log(error.response.data);
        });

      if (response) {
        setEmail(response.data.email);
        setHost(response.data.host);
        setPassword(response.data.password);
        setPort(response.data.port);
      }

      if (!response) {
        setEmail("SMTP não encontrado");
        setHost("SMTP não encontrado");
        setPassword("SMTP não encontrado");
        setPort("SMTP não encontrado");
      }
    }
    loadSMTP();
  }, []);

  async function saveData() {
    const token = await localStorage.getItem("@userIdentification");
    const response = await api
      .put(
        "/smtp",
        {
          email,
          host,
          port,
          password
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .catch(function(error) {
        console.log(error.response.data);
      });

    if (response) {
      alert(`Dados atualizado com sucesso!`);
      history.push("/admin/settings");
    }

    if (!response) {
      alert(`Erro ao atualizar os dados. Tente novamente.`);
    }
  }
  return (
    <>
      <FormContainer>
        <FormTitle>Dados de SMTP:</FormTitle>
        <FormRow>
          <FormGroup>
            <FormLabel>Email:</FormLabel>
            <FormInputText
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            ></FormInputText>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <FormLabel>Host:</FormLabel>
            <FormInputText
              value={host}
              onChange={e => {
                setHost(e.target.value);
              }}
            ></FormInputText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Porta:</FormLabel>
            <FormInputNumber
              value={port}
              onChange={e => {
                setPort(e.target.value);
              }}
            ></FormInputNumber>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <FormLabel>Senha:</FormLabel>
            <FormInputPassword
              onChange={e => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormSendGroup>
            <SendButton onClick={() => saveData()}>Salvar</SendButton>
          </FormSendGroup>
        </FormRow>
      </FormContainer>
    </>
  );
}
