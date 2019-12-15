import React, { useEffect, useState } from "react";

import api from "../../services/api";

import {
  FormContainer,
  FormRow,
  FormGroup,
  FormInputText,
  FormLabel,
  FormTitle,
  FormInputSelect,
  FormSendGroup,
  SendButton,
  SentButton
} from "./styles";

export default function PropertyForm() {
  const [currentProperty, setCurrentProperty] = useState([]);
  const [brokers, setBrokers] = useState([]);
  const [selectedBroker, setselectedBroker] = useState([]);
  const [email, setEmail] = useState([]);
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");

  useEffect(() => {
    async function loadBrokers() {
      const token = await localStorage.getItem("@userIdentification");
      const response = await api
        .get(`/brokers`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .catch(function(error) {
          console.log(error.response.data);
        });

      if (response) {
        setBrokers(response.data);
        console.log(response.data);
      }

      if (!response) {
        setBrokers({
          error: "Broker not found"
        });
      }
    }

    async function loadProperty() {
      const token = await localStorage.getItem("@userIdentification");
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
    loadBrokers();
  }, [currentProperty]);

  async function sendCaptation() {
    const token = await localStorage.getItem("@userIdentification");
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const response = await api
      .post(
        `/captation/send`,
        {
          email,
          name: selectedBroker.toString(),
          property: code.toString()
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
      alert(`Captação enviada para ${selectedBroker}`);
      console.log(response.data);
    }

    if (!response) {
      alert("Erro ao enviar captação. Tente novamente");
    }
  }

  return (
    <>
      <FormContainer>
        <FormTitle>Dados do Imóvel:</FormTitle>
        <FormRow>
          <FormGroup>
            <FormLabel>Código:</FormLabel>
            <FormInputText
              value={currentProperty.code}
              disabled
            ></FormInputText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Tipo:</FormLabel>
            <FormInputText
              value={currentProperty.type}
              disabled
            ></FormInputText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Finalidade:</FormLabel>
            <FormInputText
              value={currentProperty.finality}
              disabled
            ></FormInputText>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <FormLabel>Cidade:</FormLabel>
            <FormInputText
              value={currentProperty.type}
              disabled
            ></FormInputText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Bairro:</FormLabel>
            <FormInputText
              value={currentProperty.neighborhood}
              disabled
            ></FormInputText>
          </FormGroup>
        </FormRow>

        <FormTitle>Dados do Proprietário:</FormTitle>
        <FormRow>
          <FormGroup>
            <FormLabel>Nome:</FormLabel>
            <FormInputText
              value={currentProperty.name}
              disabled
            ></FormInputText>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <FormLabel>Telefone:</FormLabel>
            <FormInputText
              value={currentProperty.phone}
              disabled
            ></FormInputText>
          </FormGroup>
          <FormGroup>
            <FormLabel>Email:</FormLabel>
            <FormInputText
              value={currentProperty.email}
              disabled
            ></FormInputText>
          </FormGroup>
        </FormRow>

        {currentProperty.isSent ? (
          <FormRow>
            <FormSendGroup>
              <SentButton>
                Enviada ao corretor {currentProperty.broker}
              </SentButton>
            </FormSendGroup>
          </FormRow>
        ) : (
          <>
            <FormTitle>Enviar para corretor</FormTitle>
            <FormRow>
              <FormGroup>
                <FormLabel>
                  <FormInputSelect
                    onChange={e => {
                      setselectedBroker(
                        e.nativeEvent.target[e.target.selectedIndex].text
                      );
                      setEmail(e.target.value);
                    }}
                  >
                    <option selected="selected">Selecione o corretor</option>
                    {brokers.map((broker, index) => (
                      <option key={broker._id} value={broker.email}>
                        {broker.name}
                      </option>
                    ))}
                  </FormInputSelect>
                </FormLabel>
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormSendGroup>
                <SendButton onClick={() => sendCaptation()}>Enviar</SendButton>
              </FormSendGroup>
            </FormRow>
          </>
        )}
      </FormContainer>
    </>
  );
}
