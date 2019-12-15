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
  z-index: 999;
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
  margin-bottom: -10px;
  color: #147d4e;
  font-weight: bold;
`;

export const Table = styled.table`
  width: 95%;
  margin: 30px auto;
  border-spacing: 0;
  border-collapse: collapse;
  tr {
    border-top: none;
    & + tr {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
  }
  td {
    padding: 10px;
  }
`;

export const TableData = styled.td`
  font-size: 13px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
`;

export const TableHeader = styled.td`
  font-size: 13px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
`;

export const TableAlert = styled.div`
  height: 20px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.sent ? "#147d4e" : "#eb4034")};
  color: #fff;
  border-radius: 3px;
`;

export const TableButton = styled.button`
  height: 30px;
  width: 80%;
  background: #4257d6;
  border: none;
  color: #fff;
  border-radius: 2px;

  :hover {
    background: #147d4e;
    cursor: pointer;
  }
`;

export const Pagination = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const PaginationButton = styled.button`
  height: 35px;
  width: 10%;
  background: #4257d6;
  border: none;
  border-radius: 2px;
  color: #fff;

  :hover {
    background: #147d4e;
    cursor: pointer;
  }
`;

export const PaginationInfo = styled.text`
  font-size: 14px;
  color: #666;
`;

export const PageFooter = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  p {
    color: #fff;
    font-size: 14px;
    text-decoration: none;

    a {
      color: #fff;
      font-size: 14px;
      text-decoration: none;

      :hover {
        cursor: pointer;
        color: #ccc;
      }
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: auto;
`;

export const FormInputText = styled.input.attrs({
  type: "Text"
})`
  height: 40px;
  border: 1px #ccc solid;
  border-radius: 3px;
  width: 100%;
`;
