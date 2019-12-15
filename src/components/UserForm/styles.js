import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  width: 100%;
  max-width: 90%;
  margin-top: 50px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: row;
  width: 100%;
  margin-top: -20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 20px;
`;

export const FormSendGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 20px;
`;

export const FormInputText = styled.input.attrs({
  type: "Text"
})`
  height: 40px;
  border: 1px #ccc solid;
  border-radius: 3px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  color: #333;
`;

export const FormInputEmail = styled.input.attrs({
  type: "email"
})`
  height: 40px;
  border: 1px #ccc solid;
  border-radius: 3px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  color: #333;
`;

export const FormInputPassword = styled.input.attrs({
  type: "password"
})`
  height: 40px;
  border: 1px #ccc solid;
  border-radius: 3px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  color: #333;
`;

export const FormInputSelect = styled.select`
  height: 40px;
  border: 1px #ccc solid;
  border-radius: 3px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  color: #333;
  background: #fff;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #147d4e;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const FormTitle = styled.text`
  font-size: 18px;
  font-weight: bold;
  color: #147d4e;
  margin-left: 3.5%;
  margin-bottom: 20px;
  margin-top: 15px;
`;

export const SendButton = styled.button`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 200px;
  justify-content: center;
  align-items: center;
  background: #147d4e;
  border: none;
  border-radius: 4px;
  margin-bottom: 40px;
  margin-top: 20px;
  color: #fff;

  :hover {
    background: #4257d6;
    cursor: pointer;
  }
`;

export const SentButton = styled.button`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 300px;
  justify-content: center;
  align-items: center;
  background: #147d4e;
  border: none;
  border-radius: 4px;
  margin-bottom: 40px;
  margin-top: 20px;
  color: #fff;
`;
