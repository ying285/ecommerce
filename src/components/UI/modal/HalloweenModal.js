import { Button, Modal } from "react-bootstrap";

const FickModal = (props) => {
  return (
    <>
      <Modal show={props.showHalloween} onHide={props.closeHalloween}>
        <Modal.Header closeButton>
          <Modal.Title>Halloween time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="p-4">
            Halloween anses av vissa ha uppstått i samband med kelternas kontakt
            med vikingarna. När vikingarna kom till Storbritannien och Irland
            hade de med sig sina traditioner och sedvänjor så som höstblot.
            Eftersom vikingarna kom att bli den härskande klassen under flera
            hundra år i vissa områden av de brittiska öarna är det högst troligt
            att vikingarnas kultur påverkade kelterna så pass mycket att de
            anammade delar av den. Den keltiska högtiden Samhain har stora
            likheter med vikingarnas höstblot.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.closeHalloween}>
            Close
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
