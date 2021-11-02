import { Button, Modal } from "react-bootstrap";

const KundLogin = (props) => {
  return (
    <Modal show={props.loginShow} onHide={props.loginClose}>
      <Modal.Header closeButton>
        <Modal.Title>Dina Favoriter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="p-4">
          Den keltiska högtiden Samhain har stora likheter med vikingarnas
          höstblot.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.loginClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={props.handleClose}>
        Save Changes
      </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default KundLogin;
