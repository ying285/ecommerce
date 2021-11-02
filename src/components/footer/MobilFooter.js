import FavoritMobil from "../UI/modal/FavoritMobil";
import ShoppingCartMobil from "../UI/modal/ShoppingCartMobil";
import SearchMobilModal from "../UI/modal/SearchMobilModal";
import React, { useState } from "react";

const MobilFooter = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  const [cartFullscreen, setCartFullscreen] = useState(true);
  const [cartShow, setCartShow] = useState(false);

  const handleCartShow = (breakpoint) => {
    setCartFullscreen(breakpoint);
    setShow(true);
  };

  const searchModalClose = () => setSearchModal(false);
  const searchModalShow = () => setSearchModal(true);
  return (
    <div>
      <div className="bg-lighten d-lg-none d-flex flex-row justify-content-center align-items-center py-3">
        <div className="me-3 d-flex flex-row align-items-center">
          <i
            class="bi bi-search fs-2 me-1"
            onClick={() => searchModalShow()}
          ></i>
          <span style={{ fontSize: ".8rem" }}>Search</span>
        </div>
        <div className="me-3 text-center d-flex flex-row align-items-center">
          <i
            class="bi bi-heart fs-4 me-1"
            onClick={() => handleShow("lg-down")}
          ></i>
          <span style={{ fontSize: ".8rem" }}>
            Favoriter
            <span
              className="bg-secondary rounded-pill badge ms-1"
              style={{ fontSize: ".8rem" }}
            >
              {0}
            </span>
          </span>
        </div>
        <div className="position-relative  d-flex flex-row justify-content-center align-items-center">
          <div>
            <i
              className="bi bi-cart3 fs-3 me-2"
              onClick={() => handleCartShow("lg-down")}
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
      <FavoritMobil fullscreen={fullscreen} show={show} setShow={setShow} />
      <ShoppingCartMobil
        cartFullscreen={cartFullscreen}
        cartShow={cartShow}
        cartSetShow={setCartShow}
      />
      <SearchMobilModal
        searchShow={searchModal}
        searchHandleClose={searchModalClose}
      />
    </div>
  );
};

export default MobilFooter;
