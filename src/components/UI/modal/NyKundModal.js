import { Button, Modal } from "react-bootstrap";

const NyKundModal = (props) => {
  return (
    <Modal show={props.nyKundShow} onHide={props.nyKundClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ny kund</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="p-4">
          Den keltiska högtiden Samhain har stora likheter med vikingarnas
          höstblot.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.nyKundClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={props.handleClose}>
        Save Changes
      </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default NyKundModal;
