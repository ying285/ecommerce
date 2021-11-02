import { Modal } from "react-bootstrap";
import React from "react";

const ShoppingCartMobil = (props) => {
  return (
    <>
      <Modal
        show={props.cartShow}
        fullscreen={props.cartFullscreen}
        onHide={() => props.cartSetShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
};

export default ShoppingCartMobil;
