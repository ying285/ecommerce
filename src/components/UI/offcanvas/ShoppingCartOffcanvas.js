import { Offcanvas } from "react-bootstrap";

const ShoppingCartOffcanvas = (props) => {
  return (
    <Offcanvas placement="end" show={props.show} onHide={props.handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCartOffcanvas;
