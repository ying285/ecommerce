import { Offcanvas } from "react-bootstrap";
import FavoritItems from "../items/FavoritItems";

const FavoritOffcanvas = (props) => {
  return (
    <Offcanvas
      placement="end"
      show={props.show}
      onHide={props.handleClose}
      style={{ backgroundColor: "#f0e5de" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fw-bolder fs-3">
          Dina favoriter varor
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <FavoritItems />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FavoritOffcanvas;
