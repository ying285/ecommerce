import { Modal } from "react-bootstrap";
import React from "react";
import VarorItems from "../inputForm/VarorItems";

const ShoppingCartMobil = (props) => {
  return (
    <>
      <Modal show={props.cartShow} onHide={() => props.cartSetShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bolder fs-3">Varukorg</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VarorItems />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShoppingCartMobil;
