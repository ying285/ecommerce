import React from "react";
import Cart from "./Cart";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  FormControl,
  Form,
  Button,
  Offcanvas,
} from "react-bootstrap";

const Mynavbar = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" expand={false} className="p-3">
        <Container fluid>
          <Navbar.Brand href="#" className="text-white">
            Din Mat
          </Navbar.Brand>
          <Form className="d-flex w-50 ">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            ></FormControl>
            <Button variant="outline-success">Search</Button>
          </Form>
          <Cart />
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="d-lg-none"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home" className="active ">
                  <a href="#" className="text-decoration-none text-dark">
                    Hem
                  </a>
                </Nav.Link>
                <NavDropdown title="Kategorier" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <a href="#" className="text-decoration-none text-dark">
                      Frukt & grönt
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <a href="#" className="text-decoration-none text-dark">
                      Mejeri & Ost
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <a href="#" className="text-decoration-none text-dark">
                      Bröd & bageri
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <a href="#" className="text-decoration-none text-dark">
                      Kött & Chark
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    <a href="#" className="text-decoration-none text-dark">
                      Dryck
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    <a href="#" className="text-decoration-none text-dark">
                      Fisk & Skaldjur
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <a href="#" className="text-decoration-none text-dark">
                      Hem & Hushåll
                    </a>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Erbjudanden"
                  id="basic-nav-dropdown"
                  className="text-dark"
                >
                  <NavDropdown.Item href="#action/3.1">
                    <a href="#" className="text-decoration-none text-dark">
                      Extrapriser
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <a href="#" className="text-decoration-none text-dark">
                      Ny kund? 150kr rabbat
                    </a>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Mynavbar;
