import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="position-relative">
        <Button
          className="d-flex justify-content-center rounded-pill 	d-none d-lg-block "
          variant="primary"
          onClick={handleShow}
          style={{ width: "9rem" }}
        >
          <i class="bi bi-cart3 me-2"></i>
          Varukorg
        </Button>
        <span
          className="
          badge
          position-absolute
          top-0
          start-100
          translate-middle
          rounded-pill
          bg-danger
          d-none 
          d-lg-block
          "
        >
          0
        </span>
      </div>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
