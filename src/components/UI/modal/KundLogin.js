import { Button, Modal } from "react-bootstrap";
import {
  githubProvider,
  facebookProvider,
  googleProvider,
} from "../login/authMethod";

const KundLogin = (props) => {
  return (
    <Modal show={props.loginShow} onHide={props.loginClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <button
            onClick={() => {
              props.loginHandler(facebookProvider);
            }}
          >
            facebook
          </button>
          <button
            onClick={() => {
              props.loginHandler(githubProvider);
            }}
          >
            github
          </button>
          <button
            onClick={() => {
              props.loginHandler(googleProvider);
            }}
          >
            google
          </button>
        </div>
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
