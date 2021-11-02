import { Form, Modal, FormControl } from "react-bootstrap";

const SearchMobilModal = (props) => {
  return (
    <>
      <Modal show={props.searchShow} onHide={props.searchHandleClose}>
        <Modal.Header closeButton className="bg-dark"></Modal.Header>
        <Form className="d-flex w-100 p-5 mx-auto bg-dark">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 "
            aria-label="Search"
          ></FormControl>
          <button class="btn  btn-outline-light " type="submit">
            Search
          </button>
        </Form>
        {/*  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.searchHandleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default SearchMobilModal;
