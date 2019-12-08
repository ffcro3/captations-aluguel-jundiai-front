import styled from "styled-components";
import Logotipo from "../../assets/logoFull.png";
import BackgroundImage from "../../assets/jundiai.jpg";
import Side from "../../assets/side.jpg";

export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
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
