import ShoppingCartMobil from "../UI/modal/ShoppingCartMobil";
import SearchMobilModal from "../UI/modal/SearchMobilModal";
import React, { useState, useContext } from "react";
import FavoritAmount from "../UI/amount/FavoritAmount";
import FavoritOffcanvas from "../UI/offcanvas/FavoritOffcanvas";
import Login from "../UI/login/Login";
import VarorAmount from "../UI/amount/VarorAmount";
import VarorCartContext from "../context/VarorCartContext";

const MobilFooter = () => {
  const { varorState } = useContext(VarorCartContext);

  const [show, setShow] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cartShow, setCartShow] = useState(false);

  const handleCartShow = () => {
    setCartShow(true);
  };

  const searchModalClose = () => setSearchModal(false);
  const searchModalShow = () => setSearchModal(true);
  return (
    <div>
      <div className=" d-flex flex-row justify-content-center align-items-center py-3">
        <Login />
        <div className="me-3 d-flex align-items-center ">
          <i
            className="bi bi-search fs-2 me-1"
            onClick={() => searchModalShow()}
          ></i>
          <span style={{ fontSize: ".8rem" }}>Search</span>
        </div>
        <div className="me-3 ">
          <FavoritAmount publicHandleShow={handleShow} />
        </div>
        <div className="position-relative  d-flex flex-row justify-content-center align-items-center">
          <div>
            <i
              className="bi bi-cart3 fs-3 me-2"
              onClick={() => handleCartShow()}
            >
              <span
                className="
          badge
          position-absolute
          
          start-75
          translate-middle
          rounded-pill
          bg-danger
          "
                style={{ fontSize: ".7rem", top: ".5rem" }}
              >
                <VarorAmount />
              </span>
            </i>
          </div>

          <div style={{ fontSize: ".8rem" }}>
            {varorState.totalAmount < 500 && varorState.totalAmount > 1
              ? varorState.totalAmount + 99
              : varorState.totalAmount}
            {" kr"}
          </div>
        </div>
      </div>
      <FavoritOffcanvas show={show} handleClose={handleClose} />
      <ShoppingCartMobil cartShow={cartShow} cartSetShow={setCartShow} />
      <SearchMobilModal
        searchShow={searchModal}
        searchHandleClose={searchModalClose}
      />
    </div>
  );
};

export default MobilFooter;
