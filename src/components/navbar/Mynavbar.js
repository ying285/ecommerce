import React, { Fragment, useRef, useContext } from "react";
import Cart from "../UI/Cart";
import NavbarOffcanvas from "../UI/offcanvas/NavbarOffcanvas";
import { Navbar, Container, FormControl, Form } from "react-bootstrap";
import SearchContext from "../context/SearchContext";

const Mynavbar = (props) => {
  const { searchItemHandler, searchState, dispatchSearch } =
    useContext(SearchContext);
  console.log(searchState);
  const searchWord = useRef();
  const onSearchHandler = (e) => {
    e.preventDefault();
    const enteredSearchWord = searchWord.current.value;
    const lowerCaseSearchItem = enteredSearchWord.trim().toLowerCase();
    const captialSearchItem =
      lowerCaseSearchItem[0].toUpperCase() + lowerCaseSearchItem.slice(1);
    searchItemHandler(captialSearchItem);
  };

  // dispatchSearch({
  //   type: "SHOWMODAL",
  //   show: true,
  // });
  return (
    <Fragment>
      <Navbar bg="dark" expand={false} className="p-3">
        <Container fluid style={{ minWidth: "361px" }}>
          <Navbar.Brand href="#" className="text-white fw-bolder fs-3">
            Din Mat
          </Navbar.Brand>

          <Form className="d-flex w-50 " onSubmit={onSearchHandler}>
            <FormControl
              // value={searchState.item}
              type="search"
              placeholder="Search"
              className="me-2 d-none d-lg-block"
              aria-label="Search"
              ref={searchWord}
            ></FormControl>

            <button
              class="btn  btn-outline-light d-none d-lg-block "
              type="submit"
            >
              Search
            </button>
          </Form>
          <Cart />

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="d-lg-none bg-light"
          />
          <NavbarOffcanvas />
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Mynavbar;
