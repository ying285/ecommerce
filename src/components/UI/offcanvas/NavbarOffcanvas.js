import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";

const NavbarOffcanvas = () => {
  return (
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      style={{ backgroundColor: "#f0e5de" }}
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
  );
};
export default NavbarOffcanvas;
