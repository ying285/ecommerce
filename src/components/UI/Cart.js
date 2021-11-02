import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ShoppingCartOffcanvas from "./offcanvas/ShoppingCartOffcanvas";

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="position-relative">
        <Button
          className="d-flex justify-content-center rounded-pill 	d-none d-lg-block btn-danger"
          variant="primary"
          onClick={handleShow}
          style={{ width: "9rem" }}
        >
          <i class="bi bi-cart3 me-2"></i>
          Varukorg
          <span
            className="
          badge
          position-absolute
          
         
          translate-middle
          rounded-pill
          bg-secondary
          d-none 
          d-lg-block
          "
            style={{ top: ".2rem", right: "-1.2rem" }}
          >
            0
          </span>
        </Button>
        <ShoppingCartOffcanvas show={show} handleClose={handleClose} />
      </div>
    </>
  );
};

export default Cart;
