import styled from "styled-components";
import Logotipo from "../../assets/logoFull.png";
import Side from "../../assets/side.jpg";

export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 100px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ChartTitle = styled.text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40vw;
  width: 100%;
  margin: -10px auto 0;
  box-shadow: 0px 0px 25px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background: #fff;
`;

export const SideImage = styled.img.attrs({
  src: Side
})`
  height: 500px;
  width: 400px;
  object-fit: cover;
  border-radius: 5px 0 0 5px;
`;

export const Logo = styled.img.attrs({
  src: Logotipo
})`
  height: 10vh;
  width: auto;
  background: transparent;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: #555;
  font-weight: initial;
  margin-top: 10px;
`;

export const ChartContainer = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100%;
  max-width: 90%;
  border: none;
  border-radius: 5px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  justify-items: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin-bottom: 50px;
  justify-items: center;
  align-items: center;
`;

export const FormLabel = styled.label`
  font-size: 18px;
  color: #333;
`;

export const InputEmail = styled.input.attrs({
  type: "email",
  placeholder: "Digite o seu e-mail"
})`
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  color: #555;
`;

export const InputPassword = styled.input.attrs({
  type: "password",
  placeholder: "Digite a sua senha"
})`
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  color: #555;
  margin-top: 25px;
`;

export const CreateAccount = styled.a.attrs({
  href: "mailto:fabriciofrocha87@gmail.com"
})`
  margin-top: 15px;
  font-size: 14px;
  color: #147d4e;
  text-decoration: none;
`;

export const LoginButton = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  height: 48px;
  width: 100%;
  background: #1b9860;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;

  :hover {
    background: #147d4e;
  }
`;

export const SettingsContainer = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100%;
  max-width: 60%;
  border: 1px solid #66e8ae;
  border-radius: 5px;
  padding: 20px;

  :first-child {
    margin: 30px auto;
  }

  :last-child {
    margin-bottom: 40px;
  }

  :hover {
    background: #eee;
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80px;
`;

export const TextContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 20px;
    color: #147d4e;
    font-weight: bold;
  }

  small {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
  }
`;

export const SettingsLogo = styled.img.attrs({
  src: Logotipo
})`
  margin: 50px auto;
  height: 100px;
  width: auto;
`;

export const BackButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 80px;
  background: #4257d6;
  border: none;
  border-radius: 4px;
  color: #fff;
  margin-right: 15px;
  margin-left: 30px;
  margin-top: 30px;

  :hover {
    cursor: pointer;
    background: #147d4e;
  }
`;