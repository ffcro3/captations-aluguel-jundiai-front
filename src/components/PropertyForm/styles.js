import styled from "styled-components";

const half = window.innerWidth / 2;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  width: 100%;
  max-width: 90%;
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

export const StatusButton = styled.button`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 200px;
  justify-content: center;
  align-items: center;
  background: ${props => (props.sent ? "#77dd77" : "#c41d3c")};
  border: none;
  border-radius: 4px;
  margin-bottom: 40px;
  margin-top: 20px;

  span {
  }

  :hover {
    background: #77dd77;
    cursor: pointer;

    span:after {
      display: none;
      content: "Enviar?";
    }
  }
`;
