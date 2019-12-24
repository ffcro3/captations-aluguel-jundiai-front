import React from "react";

import SidePhoto from "../../components/RegisterCaption/Sidebar";
import Form from "../../components/RegisterCaption/Form";

import { PageContainer, PhotoContainer, FormContainer } from "./styles";

export default function Register() {
  return (
    <>
      <PageContainer>
        <PhotoContainer>
          <SidePhoto />
        </PhotoContainer>
        <FormContainer>
          <Form />
        </FormContainer>
      </PageContainer>
    </>
  );
}
