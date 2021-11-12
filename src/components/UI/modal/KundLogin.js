import { Button, Modal } from "react-bootstrap";
import { facebookProvider, googleProvider } from "../login/authMethod";
import { Form } from "react-bootstrap";

const KundLogin = (props) => {
  return (
    <Modal show={props.loginShow} onHide={props.loginClose}>
      <Modal.Header closeButton style={{ backgroundColor: "#f0e5de" }}>
        <Modal.Title className="fw-bolder">Logga in</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#f0e5de" }}>
        <Form>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="e-postadress" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mt-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Lösenord" />
          </Form.Group>
          <div className="text-center mt-4">
            <h5 className="fw-bolder">Glömt mitt lösenord</h5>
          </div>

          <div className="text-center mt-4 bg-light p-3 text-danger ">
            <h5 className="fw-bolder">Jag vill bli kund</h5>
          </div>

          <div className="text-center mt-4">
            <Button
              variant="primary"
              type="submit"
              className="w-75 rounded-pill shadow fw-bolder"
            >
              Logga in
            </Button>
            <p className="mt-3 mb-0 text-secondary">or</p>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#f0e5de" }}>
        <div className="position-relative d-flex mx-auto">
          <div className="me-3">
            <Button
              onClick={() => {
                props.loginHandler(facebookProvider);
              }}
              style={{ width: "8rem" }}
              className="shadow"
            >
              Facebook
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                props.loginHandler(googleProvider);
              }}
              className="bg-danger shadow"
              style={{ width: "8rem" }}
            >
              Google
            </Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default KundLogin;
