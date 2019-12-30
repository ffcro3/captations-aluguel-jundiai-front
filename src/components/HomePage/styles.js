import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  width: 100%;
  border: none;
  background: #00a85a;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 420px;
  width: 100%;
  background: url("https://i.imgur.com/omIizWl.jpg");
  background-size: 100%;
`;

export const BoxContainer = styled.div`
  margin-top: -84px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 100%;
  background: transparent;
  border: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 80%;
    margin: 0px auto;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  background: #3264a8;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  padding: 15px;
  transition: transform 0.2s; /* Animation */
  color: #eee;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition-duration: 500ms, 500ms;
  }

  @media (max-width: 768px) {
    height: 200px;
    width: 350px;
    margin-bottom: 15px;
  }

  @media (max-width: 415px) {
    height: 170px;
    width: 220px;
    margin-bottom: 15px;
  }
`;

export const BoxTitle = styled.text`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,800&display=swap");
  width: 258px;
  height: 83px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 38px;
  line-height: 34px;
  color: #ffffff;

  @media (max-width: 1125px) {
    font-size: 34px;
  }

  @media (max-width: 1000px) {
    font-size: 28px;
  }
  
  @media (max-width: 850px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const BoxSubTitle = styled.text`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,800&display=swap");
  width: 258px;
  height: 83px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 34px;
  color: #ffffff;
  margin-top: 80px;

  @media (max-width: 1125px) {
    font-size: 24px;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 850px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    margin-bottom: -10px;
    font-size: auto;
  }
`;

export const ImageSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 80px auto 20px;
  height: 400px;
  width: 100%;
  background: #fff;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 600px;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 40%;
  background: #fff;

  p {
    margin-top: 20px;
  }

  @media (max-width: 1125px){
    width: 45%
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
  }

`;

export const Image = styled.div`
  width: 95%;
  height: 80%;
  background: url("https://i.imgur.com/omIizWl.jpg");
  background-size: cover;
  margin-right: 90px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0px;
  }
`;

export const ImageText = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
  width: 90%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000000;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ImageButton = styled.button`
  width: 197px;
  height: 46px;
  margin-top: 30px;
  background: #00cd6e;
  border-radius: 7px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  :hover {
    cursor: pointer;
    background: #00a85a;
  }

  span {
    font-size: 16px;
    color: #fff;
  }
`;

export const WhyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 98%;
  background: #3264a8;
  border-radius: 15px;
  margin: 0px auto;
  padding: 60px;
`;

export const WhyTitle = styled.span`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
`;

export const WhyRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const WhySubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const WhyImage = styled.div`
  width: 150px;
  height: 150px;
  background: #c4c4c4;

  @media (max-width: 850px) {
    width: 100px;
    height: 100px;
  }
`;

export const WhyText = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
  width: 100%;
  height: 80px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 850px) {
    font-size: 12px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const WhySubDivision = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const WantContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
`;

export const WantTitle = styled.span`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  width: 100%;
  height: 39px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #111;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 22px; 
    text-align: center;
    margin-top: -30px;
    width: 80%;
  }

  @media (min-width: 769px) {
    font-size: 26px; 
    text-align: center;
    margin-top: -30px;
    width: 80%;
  }

  @media (max-width: 500px) {
    font-size: 20px; 
    text-align: center;
    margin-top: -30px;
    width: 80%;
  }
`;

export const WantSubTitle = styled.span`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300&display=swap");
  width: 100%;
  height: 66px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    font-size: 16px; 
    margin-top: 30px;
    width: 70%;
  }

  @media (max-width: 768px) {
    font-size: 14px; 
    margin-top: 30px;
    width: 80%;
  }
`;

export const WantButton = styled.button`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 70%;
  height: 68px;
  background: #00cd6e;
  border-radius: 5px;
  color: #fff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  border: none;

  :hover {
    cursor: pointer;
    background: #00a85a;
  }

  @media (max-width: 1000px) {
    font-size: 16px; 
    margin-top: 30px;
    width: 70%;
  }

  @media (max-width: 768px) {
    font-size: 14px; 
    margin-top: 30px;
    width: 80%;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;


`;

export const FooterMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 341px;
  background: #00cd6e;
  border-radius: 15px 15px 0px 0px;

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    height: 800px;
    width: 100%;
    justify-content: center;
  }
`;

export const FooterSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 100%;
  background: #00cd6e;
  margin: 0px auto;

  span {
    color: #fff;
    font-size: 16px;
    text-align: left;
    margin-bottom: 10px;
  }

  img {
    height: auto;
    width: 100%;

    :hover {
      cursor: pointer;
    }
  }

  .icon {
    height: 30px;
    width: 30px;
    margin-left: 0px;
    margin-right: 15px;

    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 780px) {
    width: 90%;
    margin: 0px auto;
    margin-bottom: -20px;
    height: 100%;

  img {
    height: auto;
    width: 80%;
    margin: 0px auto;
  }

  }
`;

export const FooterSub = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300&display=swap");
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #00a85a;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  a {
    color: #fff;
    text-decoration: none;
    :hover {
      cursor: pointer;
      color: #aaa;
    }
  }
`;
