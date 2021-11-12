import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import ShoppingCartMobil from "../UI/modal/ShoppingCartMobil";
import VarorAmount from "./amount/VarorAmount";
import VarorCartContext from "../context/VarorCartContext";

const Cart = () => {
  const [cartShow, setCartShow] = useState(false);
  const { varorState } = useContext(VarorCartContext);

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
          <i className="bi bi-cart3 me-2"></i>
          {varorState.totalAmount < 500 && varorState.totalAmount > 1
            ? varorState.totalAmount + 99
            : varorState.totalAmount}
          {" kr"}
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
