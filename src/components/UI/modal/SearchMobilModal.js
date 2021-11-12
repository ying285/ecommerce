import { Form, Modal, FormControl } from "react-bootstrap";
import SearchContext from "../../context/SearchContext";
import React, { useContext, useRef } from "react";

const SearchMobilModal = (props) => {
  const { searchItemHandler, dispatchSearch } = useContext(SearchContext);
  const searchWord = useRef();
  const onSearchHandler = (e) => {
    e.preventDefault();
    const enteredSearchWord = searchWord.current.value;
    const lowerCaseSearchItem = enteredSearchWord.trim().toLowerCase();
    const captialSearchItem =
      lowerCaseSearchItem[0].toUpperCase() + lowerCaseSearchItem.slice(1);
    searchItemHandler(captialSearchItem);
  };
  return (
    <>
      <Modal show={props.searchShow} onHide={props.searchHandleClose}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#f0e5de" }}
        ></Modal.Header>
        <Form
          className="d-flex w-100 p-5 mx-auto"
          onSubmit={onSearchHandler}
          style={{ backgroundColor: "#f0e5de" }}
        >
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 "
            aria-label="Search"
            ref={searchWord}
          ></FormControl>
          <button
            className="btn  btn-outline-dark "
            type="submit"
            onClick={() => {
              dispatchSearch({ type: "SHOWMODAL", show: true });
            }}
          >
            Search
          </button>
        </Form>
      </Modal>
    </>
  );
};

export default SearchMobilModal;
