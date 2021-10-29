import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

const Subnavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="d-none d-lg-block">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto postition-relative">
            <Nav.Link href="#home" className="active ">
              Hem
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

            <NavDropdown title="Erbjudanden" id="basic-nav-dropdown">
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
            <div className="me-5 text-center position-absolute top-25 end-0">
              <i class="bi bi-heart fs-5 d-flex flex-column "></i>
              <span style={{ fontSize: ".8rem" }}>Favoriter</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Subnavbar;
