import { Button, Modal } from "react-bootstrap";
import halloweentime from "../../../images/img2/halloweentime.jpg";

const FickModal = (props) => {
  return (
    <>
      <Modal show={props.showHalloween} onHide={props.closeHalloween}>
        <Modal.Header closeButton style={{ backgroundColor: "#e2eeee" }}>
          <Modal.Title className="fw-bolder">Halloween time</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5" style={{ backgroundColor: "#e2eeee" }}>
          <img
            src={halloweentime}
            style={{ width: "20rem" }}
            className="ms-4 rounded"
            alt="halloweentime"
          />

          <p className="p-4">
            Halloween anses av vissa ha uppstått i samband med kelternas kontakt
            med vikingarna. När vikingarna kom till Storbritannien och Irland
            hade de med sig sina traditioner och sedvänjor så som höstblot.
            Eftersom vikingarna kom att bli den härskande klassen under flera
            hundra år i vissa områden av de brittiska öarna.
          </p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#e2eeee" }}>
          <Button variant="primary" onClick={props.closeHalloween}>
            Stanga
          </Button>
          {/* <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FickModal;
