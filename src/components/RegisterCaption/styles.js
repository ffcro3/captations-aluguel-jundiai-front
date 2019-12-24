import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const PhotoFrame = styled.div`
  width: 406px;
  height: 324px;
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
`;

export const PhotoButton = styled.button`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  width: 177px;
  height: 40px;
  background: #3264a8;
  border-radius: 7px;
  border: none;
  margin-top: 16px;

  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }

  :hover {
    background: #22487a;
    cursor: pointer;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: 2.5vh auto;
  background: #fff;
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
`;

export const FormLabel = styled.label`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
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
  height: 38px;
  width: 260px;
  padding: 15px;
  margin-bottom: 18px;
`;

export const FormInputTextSingle = styled.input.attrs({
  type: "text"
})`
  background: #f9f9f9;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 3px;
  height: 38px;
  width: 571px;
  padding: 15px;
  margin-bottom: 18px;
`;

export const FormInputSelect = styled.select`
  background: #f9f9f9;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 3px;
  height: 38px;
  width: 260px;
  padding: 10px;
  margin-bottom: 18px;
  color: #777777;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export const FormTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: #000000;
  margin-bottom: 50px;
`;

export const FormButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  border: none;
  width: 132px;
  height: 40px;
  background: #00a85a;
  border-radius: 7px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  :hover {
    background: #00733d;
    cursor: pointer;
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
`;
