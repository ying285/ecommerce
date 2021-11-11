import { Modal } from "react-bootstrap";
import React from "react";
import VarorItems from "../inputForm/VarorItems";

const ShoppingCartMobil = (props) => {
  return (
    <>
      <Modal show={props.cartShow} onHide={() => props.cartSetShow(false)}>
        <Modal.Header closeButton style={{ backgroundColor: "#f0e5de" }}>
          <Modal.Title className="fw-bolder fs-3">Varukorg</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f0e5de" }}>
          <VarorItems />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShoppingCartMobil;
