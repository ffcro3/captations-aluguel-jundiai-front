import React from "react";

import {
  Container,
  FormContainer,
  FormRow,
  FormGroup,
  FormLabel,
  FormInputText,
  FormInputSelect,
  FormInputTextSingle,
  FormTitle,
  FormButton,
  Terms
} from "./styles";

export default function Form() {
  return (
    <>
      <Container>
        <FormContainer>
          <FormRow>
            <FormTitle>Anúncie seu imóvel</FormTitle>
            <img
              src="https://i.imgur.com/tzfho6F.png"
              alt="Aluguel Jundiaí Logo"
            />
          </FormRow>
          <FormRow>
            <FormGroup>
              <FormLabel>Tipo do Imóvel</FormLabel>
              <FormInputSelect>
                <option value="Selecione o tipo do ímóvel" selected>
                  Selecione o Tipo do Imóvel
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </FormInputSelect>
            </FormGroup>
            <FormGroup>
              <FormLabel>Finalidade</FormLabel>
              <FormInputSelect>
                <option value="Selecione a finalidade do ímovel" selected>
                  Selecione o Tipo do Imóvel
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </FormInputSelect>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <FormLabel>Cidade</FormLabel>
              <FormInputText placeholder="Digite a cidade" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Bairro</FormLabel>
              <FormInputText placeholder="Digite o bairro" />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <FormLabel>Nome</FormLabel>
              <FormInputTextSingle placeholder="Digite o seu nome" />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <FormLabel>E-mail</FormLabel>
              <FormInputTextSingle placeholder="Digite o seu melhor e-mail" />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <FormLabel>Telefone</FormLabel>
              <FormInputText placeholder="(xx) xxxxx-xxxx" />
            </FormGroup>
          </FormRow>
          <FormRow>
            <Terms>
              Ao cadastrar o seu imóvel, você autoriza a Aluguel Jundiaí
              utilizar os dados fornecidos neste formulário para divulgação e
              contato telefônico/e-mail.
            </Terms>
          </FormRow>
          <FormRow>
            <FormButton>Cadastrar</FormButton>
          </FormRow>
        </FormContainer>
      </Container>
    </>
  );
}
