import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ShoppingCartMobil from "../UI/modal/ShoppingCartMobil";
import VarorAmount from "./amount/VarorAmount";

const Cart = () => {
  const [cartShow, setCartShow] = useState(false);

  const handleCartShow = () => {
    setCartShow(true);
  };

  return (
    <>
      <div className="position-relative">
        <Button
          className="d-flex justify-content-center rounded-pill 	d-none d-lg-block btn-danger"
          variant="primary"
          onClick={() => handleCartShow()}
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
            <VarorAmount />
          </span>
        </Button>
        <ShoppingCartMobil cartShow={cartShow} cartSetShow={setCartShow} />
      </div>
    </>
  );
};

export default Cart;
