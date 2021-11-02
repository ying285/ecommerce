import React, { Fragment } from "react";
import Cart from "../UI/Cart";
import NavbarOffcanvas from "../UI/offcanvas/NavbarOffcanvas";
import { Navbar, Container, FormControl, Form } from "react-bootstrap";

const Mynavbar = () => {
  return (
    <Fragment>
      <Navbar bg="dark" expand={false} className="p-3">
        <Container fluid>
          <Navbar.Brand href="#" className="text-white fw-bolder fs-3">
            Din Mat
          </Navbar.Brand>
          <Form className="d-flex w-50 ">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            ></FormControl>
            <button class="btn  btn-outline-light" type="submit">
              Search
            </button>
          </Form>
          <Cart />
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="d-lg-none bg-light"
          />
          <NavbarOffcanvas />
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Mynavbar;
