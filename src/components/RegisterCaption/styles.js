import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #fff;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #00a85a;
  width: 100%;
  height: 100%;
  max-height: 100%;
  @media (max-width: 768px) { 
    background: #fff;
    height: 400px;
    margin-top: -20px
   }
`;

export const PhotoFrame = styled.div`
  width: 80%;
  height: 40%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  img {
    height: 32px;
    width: 32px;
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    border: 1px solid #eee;
    height: 200px;
    width: 200px;
  }
`;

export const PhotoButton = styled.button`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  width: 40%;
  height: 6%;
  background: #3264a8;
  border-radius: 7px;
  border: none;
  margin-top: 16px;

  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 85%;
    line-height: 20px;
    color: #ffffff;
  }

  :hover {
    background: #22487a;
    cursor: pointer;
  }

  @media (max-width: 768px) { 
    height: 40px;
    width: 120px;
   }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  width: 70%;
  height: 95%;
  min-width: 40%;
  margin: 2.5vh auto;
  background: #fff;
  

  @media (max-width: 768px) {
    margin: -50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 210%;
   }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  img {
    height: 50px;
    width: auto;
  }

  @media (max-width: 768px) { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-top: -20px;
      margin-bottom: 20px;
    }
   }
`;

export const FormLabel = styled.label`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #3264a8;
  margin-bottom: 8px;
`;

export const FormInputText = styled.input.attrs({
  type: "text"
})`
  background: #f9f9f9;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 3px;
  height: 30px;
  width: 260px;
  padding: 15px;
  margin-bottom: 18px;
  @media (max-width: 768px) { 
    width: 100%;
   }
`;

export const FormInputTextSingle = styled.input.attrs({
  type: "text"
})`
  background: #f9f9f9;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 3px;
  height: 30px;
  width: 571px;
  padding: 15px;
  margin-bottom: 18px;
  @media (max-width: 768px) { 
    width: 100%;
   }
`;

export const FormInputSelect = styled.select`
  background: #f9f9f9;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 3px;
  height: 30px;
  width: 260px;
  padding: 5px;
  margin-bottom: 18px;
  color: #777777;
  @media (max-width: 768px) { 
    width: 100%;
   }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  @media (max-width: 768px) { 
    width: 100%;
   }
`;

export const FormTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 34px;
  color: #000000;
  margin-bottom: 35px;
`;

export const FormButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  border: none;
  width: 120px;
  height: 32px;
  background: #00a85a;
  border-radius: 7px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;

  :hover {
    background: #00733d;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    margin-bottom:20px;
  }

`;

export const Terms = styled.span`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300&display=swap");
  font-family: Montserrat;
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 15px;
  color: #111;
  margin-bottom: 20px;
  width: 80%
`;
