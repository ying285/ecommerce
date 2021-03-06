import React from "react";
import { Navbar, Container } from "react-bootstrap";
import NavbarDropDown from "../UI/dropdown/NavbarDropDown";

const Subnavbar = (props) => {
  return (
    <Navbar
      expand="lg"
      className="d-none d-lg-block"
      style={{ backgroundColor: "#f0e5de" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavbarDropDown loginHandler={props.loginHandler} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Subnavbar;
