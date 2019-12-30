import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #fff;

  
  @media (max-width: 768px) { 
    display: flex;
    flex-direction: column;
    height: 100%;
   }
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35%;

  @media (max-width: 1100px) {
    width: 30%;
  }

  @media (max-width: 992px) {
    width: 25%;
  }


  @media (max-width: 768px) { 
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
   }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 65%;

  @media (max-width: 1100px) {
    width: 60%;
  }

  @media (max-width: 992px) {
    width: 55%;
  }

  @media (max-width: 768px) { 
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
   }

`;
