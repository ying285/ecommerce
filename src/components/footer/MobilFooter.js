import ShoppingCartMobil from "../UI/modal/ShoppingCartMobil";
import SearchMobilModal from "../UI/modal/SearchMobilModal";
import React, { useState } from "react";
import FavoritAmount from "../UI/amount/FavoritAmount";
import FavoritOffcanvas from "../UI/offcanvas/FavoritOffcanvas";

const MobilFooter = () => {
  const [show, setShow] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cartShow, setCartShow] = useState(false);

  const handleCartShow = () => {
    setShow(true);
  };

  const searchModalClose = () => setSearchModal(false);
  const searchModalShow = () => setSearchModal(true);
  return (
    <div>
      <div className="bg-lighten d-lg-none d-flex flex-row justify-content-center align-items-center py-3">
        <div className="me-3 d-flex align-items-center ">
          <i
            class="bi bi-search fs-2 me-1"
            onClick={() => searchModalShow()}
          ></i>
          <span style={{ fontSize: ".8rem" }}>Search</span>
        </div>
        <div className="me-3 text-center ">
          {/* <i class="bi bi-heart fs-4 me-1" onClick={() => handleShow()}></i>
          <span style={{ fontSize: ".8rem" }}>
            Favoriter */}
          <FavoritAmount publicHandleShow={handleShow} />
          {/* <span
              className="bg-secondary rounded-pill badge ms-1"
              style={{ fontSize: ".8rem" }}
            >
              {0}
            </span> */}
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
                0
              </span>
            </i>
          </div>

          <div style={{ fontSize: ".8rem" }}>56.98kr</div>
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
