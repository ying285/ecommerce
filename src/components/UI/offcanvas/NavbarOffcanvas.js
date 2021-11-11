import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";

const NavbarOffcanvas = () => {
  return (
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      style={{ backgroundColor: "#f0e5de" }}
      className="p-4"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <a href="#" className="text-decoration-none text-dark mb-5 ">
          <h5>Hem</h5>
        </a>

        <ul className="list-unstyled my-4">
          <h5>Kategorier</h5>
          <li className="mt-2">
            <a href="#" className="text-decoration-none text-dark">
              Frukt & grönt
            </a>
          </li>

          <li className="mt-2">
            <a href="#" className="text-decoration-none text-dark">
              Mejeri & Ost
            </a>
          </li>

          <li className="mt-2">
            <a href="#" className="text-decoration-none text-dark">
              Bröd & bageri
            </a>
          </li>

          <li className="mt-2">
            <a href="#" className="text-decoration-none text-dark">
              Kött & Chark
            </a>
          </li>

          <li className="mt-2">
            <a href="#" className="text-decoration-none text-dark">
              Dryck
            </a>
          </li>

          <li className="mt-2">
            <a href="#" className="text-decoration-none text-dark">
              Fisk & Skaldjur
            </a>
          </li>

          <li className="mt-2">
            <a href="#" className="text-decoration-none text-dark">
              Hem & Hushåll
            </a>
          </li>
        </ul>

        <ul className="list-unstyled">
          <h5>Erbjudanden</h5>
          <li className="mt-2">
            <a href="#" className="text-decoration-none text-dark">
              Extrapriser
            </a>
          </li>
          <li className="mt-2">
            <a href="#" className="text-decoration-none text-dark">
              Ny kund? 150kr rabbat
            </a>
          </li>
        </ul>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};
export default NavbarOffcanvas;
