import { Offcanvas } from "react-bootstrap";
import Items from "../items/Items";

const FavoritOffcanvas = (props) => {
  return (
    <Offcanvas placement="end" show={props.show} onHide={props.handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Dina favoriter</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Items />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FavoritOffcanvas;
