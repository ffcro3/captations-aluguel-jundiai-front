import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  width: 100vw;
  background: #fff;
  box-shadow: 0px 0px 40px 1px rgba(0, 0, 0, 0.1);
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    height: 40px;
    width: auto;
    :hover {
      cursor: pointer;
    }
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: #555;
    :hover {
      cursor: pointer;
    }
  }

  ul {
    list-style: none;
    color: #147d4e;
    background: transparent;
    font-weight: bold;

    li {
      display: inline;
      margin-left: 10px;
      margin-right: 10px;
      :hover {
        color: #444;
        cursor: pointer;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90vw;
  min-height: 10vh;
  width: 100%;
  margin: -10px auto 0;
  box-shadow: 0px 0px 25px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: #fff;
`;

export const PageTitle = styled.h2`
  margin: 40px;
  color: #555;
  font-weight: bold;
`;
