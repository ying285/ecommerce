import { Offcanvas } from "react-bootstrap";
import React, { useContext } from "react";
import FavoritCartContext from "../../context/FavoritCartContext";

const FavoritOffcanvas = (props) => {
  const { favoritContext } = useContext(FavoritCartContext);

  return (
    <Offcanvas placement="end" show={props.show} onHide={props.handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Dina favoriter</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div></div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FavoritOffcanvas;
