import { NavDropdown, Nav } from "react-bootstrap";
import React, { useState } from "react";
import FavoritOffcanvas from "../offcanvas/FavoritOffcanvas";
import KundLogin from "../modal/KundLogin";
import FavoritAmount from "../amount/FavoritAmount";

const NavbarDropDown = () => {
  const [show, setShow] = useState(false);
  const [loginModal, setLoginkModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const kundLoginOpenModal = () => {
    setLoginkModal(true);
  };

  const kundLoginCloseModal = () => {
    setLoginkModal(false);
  };

  return (
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
      <div className="me-5 text-center position-absolute top-25 end-0 d-flex align-items-center mt-2">
        {/* <i
          class="bi bi-heart fs-5 d-flex flex-column me-1 "
          onClick={() => handleShow()}
        ></i>
        <span style={{ fontSize: ".8rem" }}>
          Favoriter */}
        <FavoritAmount publicHandleShow={handleShow} />
        {/* <span
            className="bg-danger rounded-pill badge ms-1"
            style={{ fontSize: ".8rem" }}
          >
            {favoritState.items.length}
          </span> */}

        <a href="#" className="text-decoration-none ms-3 me-1 fs-4 text-dark">
          <i
            class="bi bi-box-arrow-in-right"
            onClick={() => kundLoginOpenModal()}
          ></i>
        </a>
        <span style={{ fontSize: ".8rem" }}>Login</span>
      </div>
      <FavoritOffcanvas show={show} handleClose={handleClose} />
      <KundLogin loginShow={loginModal} loginClose={kundLoginCloseModal} />
    </Nav>
  );
};

export default NavbarDropDown;
