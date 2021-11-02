import { Button, Modal } from "react-bootstrap";

const FickModal = (props) => {
  return (
    <>
      <Modal show={props.showFick} onHide={props.closeFick}>
        <Modal.Header closeButton>
          <Modal.Title>Fika tid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="p-4">
            På arbetet är det vanligt att man har en gemensam "fika"-paus på
            förmiddagen och en på eftermiddagen. Den svenska traditionen sprider
            sig genom svenska företag runt om i världen och kanske att ni redan
            har "fika"-paus? Vanliga fika-tider i Sverige är 9:30-9:45 and
            14:30-14:45. Fika är en svensk samhällsinstitution som innebär
            mellanmänskligt umgänge i kombination med intagande av exempelvis
            kaffe och kaka. Fika förekommer vanligen inom svenskt arbetsliv, i
            form av fikapauser eller kaffepauser en fika tillsammans med
            kollegor. Denna tradition kan anses vara en del av svensk kultur.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.closeFick}>
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
