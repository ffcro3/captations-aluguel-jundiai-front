import React, { Component } from "react";
import {
  Navbar,
  Button,
  InputGroup,
  FormControl,
  Image
} from "react-bootstrap";

export default class Report extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark">
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
      </>
    );
  }
}
