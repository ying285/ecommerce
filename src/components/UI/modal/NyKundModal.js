import { Button, Modal, Form } from "react-bootstrap";

const NyKundModal = (props) => {
  return (
    <Modal show={props.nyKundShow} onHide={props.nyKundClose}>
      <Modal.Header closeButton style={{ backgroundColor: "#f0e5de" }}>
        <Modal.Title className="fw-bolder">Ny här? Bli kund</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#f0e5de" }}>
        <Form>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="e-postadress" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mt-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Telefonnummer" />
          </Form.Group>

          <Form.Group className="mt-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Postnummer" />
          </Form.Group>

          <Form.Group className="mt-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Lösenord" />
          </Form.Group>

          <div className="text-center mt-4 bg-light p-3 text-danger ">
            <h5 className="fw-bolder">Jag vill logga in</h5>
          </div>

          <div className="text-center mt-3">
            <Button
              variant="primary"
              type="submit"
              className="w-75 rounded-pill shadow fw-bolder mb-3"
            >
              Bli kund
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NyKundModal;
