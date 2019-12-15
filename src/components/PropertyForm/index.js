import React, { useEffect, useState } from "react";

import api from "../../services/api";

import {
  FormContainer,
  FormRow,
  FormGroup,
  FormInputText,
  FormLabel,
  FormTitle,
  StatusButton
} from "./styles";

export default function PropertyForm() {
  const [currentProperty, setCurrentProperty] = useState([]);
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");

  useEffect(() => {
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
        console.log(response.data);
      }

      if (!response) {
        setCurrentProperty({
          error: "Property not found"
        });
      }
    }
    loadProperty();
  }, []);

  return (
    <>
      <FormContainer>
        <FormTitle>Dados do Imóvel:</FormTitle>
        <FormRow>
          <FormGroup>
            <FormLabel>Código:</FormLabel>
            <FormInputText value={currentProperty.code}></FormInputText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Tipo:</FormLabel>
            <FormInputText value={currentProperty.type}></FormInputText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Finalidade:</FormLabel>
            <FormInputText value={currentProperty.finality}></FormInputText>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <FormLabel>Cidade:</FormLabel>
            <FormInputText value={currentProperty.type}></FormInputText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Bairro:</FormLabel>
            <FormInputText value={currentProperty.finality}></FormInputText>
          </FormGroup>
        </FormRow>

        <FormTitle>Dados do Proprietário:</FormTitle>
        <FormRow>
          <FormGroup>
            <FormLabel>Nome:</FormLabel>
            <FormInputText value={currentProperty.name}></FormInputText>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <FormLabel>Telefone:</FormLabel>
            <FormInputText value={currentProperty.phone}></FormInputText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Email:</FormLabel>
            <FormInputText value={currentProperty.email}></FormInputText>
          </FormGroup>
        </FormRow>

        <FormTitle>Status:</FormTitle>
        <FormRow>
          <StatusButton>
            {currentProperty.isSent ? (
              <span>Enviado</span>
            ) : (
              <span>Não Enviado</span>
            )}
          </StatusButton>
        </FormRow>
      </FormContainer>
    </>
  );
}
