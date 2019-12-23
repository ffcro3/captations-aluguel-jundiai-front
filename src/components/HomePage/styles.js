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
  height: 250px;
  width: 100%;
  background: transparent;
  border: none;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 309px;
  height: 249px;
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
  margin-top: 135px;
`;

export const ImageSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
  height: 400px;
  width: 100%;
  background: #fff;
  padding: 40px auto;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 45%;
  background: #fff;
  padding-top: 60px;
  padding-right: 90px;
  padding-left: 20px;

  p {
    margin-top: 20px;
  }
`;

export const Image = styled.div`
  width: 483px;
  height: 301px;
  background: url("https://i.imgur.com/omIizWl.jpg");
  background-size: cover;
  margin-left: 90px;
`;

export const ImageText = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
  width: 500px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
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
  width: 99%;
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
`;

export const WhySubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const WhyImage = styled.div`
  width: 201px;
  height: 139px;
  background: #c4c4c4;
`;

export const WhyText = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

  width: 100%px;
  height: 80px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
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
  width: 827px;
  height: 39px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #111;
  margin-bottom: 20px;
`;

export const WantSubTitle = styled.span`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300&display=swap");
  width: 695px;
  height: 66px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
`;

export const WantButton = styled.button`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&display=swap");
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 629px;
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
`;

export const FooterSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 30%;
  height: 80%;
  background: #00cd6e;

  span {
    color: #fff;
    font-size: 16px;
    text-align: left;
    margin-bottom: 10px;
  }

  img {
    height: 200px;
    width: 280px;
    margin-left: 80px;
  }

  .icon {
    height: 30px;
    width: 30px;
    margin-left: 0px;
    margin-right: 15px;
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
