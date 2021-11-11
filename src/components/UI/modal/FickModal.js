import { Button, Modal } from "react-bootstrap";
import icecream from "../../../images/img2/icecream.jpg";

const FickModal = (props) => {
  return (
    <>
      <Modal show={props.showFick} onHide={props.closeFick}>
        <Modal.Header closeButton style={{ backgroundColor: "#f0e5de" }}>
          <Modal.Title className="fw-bolder">Fika tid</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3" style={{ backgroundColor: "#f0e5de" }}>
          <div className="d-flex">
            <img
              src={icecream}
              alt="icecream"
              style={{ width: "12rem" }}
              className="rounded"
            />
            <p className="p-4">
              På arbetet är det vanligt att man har en gemensam "fika"-paus på
              förmiddagen och en på eftermiddagen. Den svenska traditionen
              sprider sig genom svenska företag runt om i världen och kanske att
              ni redan har "fika"-paus? Vanliga fika-tider i Sverige är
              9:30-9:45 and 14:30-14:45. Fika är en svensk samhällsinstitution
              som innebär mellanmänskligt umgänge.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#f0e5de" }}>
          <Button variant="primary" onClick={props.closeFick}>
            Stänga
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
