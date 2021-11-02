import React, { Fragment, useState } from "react";

import mat3 from "../../images/img2/mat3.jpg";
import mat4 from "../../images/img2/mat4.jpg";
import NyKundModal from "../UI/modal/NyKundModal";

const Header = () => {
  const [nyKundModal, setNyKundModal] = useState(false);

  const nyKundOpenModal = () => {
    setNyKundModal(true);
  };

  const nyKundCloseModal = () => {
    setNyKundModal(false);
  };
  return (
    <Fragment>
      <div className="m-5 row">
        <div className="col-md-6">
          <img src={mat3} alt="foto" className="w-100 rounded" />
        </div>

        <div className=" mt-3 col-md-6">
          <h2>Ny här?</h2>
          <h5>
            Vi erbjuder utkörning av matvaror till mer än hälften av alla
            hushåll i Sverige. Tryck på knappen nedan och registera dig idag då
            får du 150kr rabatt i kassan.
          </h5>
          <button
            className="btn btn-primary btn-lg mt-xl-5 mt-2 rounded-pill shadow position-relative"
            onClick={() => nyKundOpenModal()}
          >
            Bli kunde nu
          </button>
          {/* <div>
            <img
              src={mat4}
              alt="image"
              style={{ width: "15rem" }}
              className="position-absolute rounded end-0 top-25 d-none d-lg-block"
            />
          </div> */}
        </div>
      </div>
      <NyKundModal nyKundShow={nyKundModal} nyKundClose={nyKundCloseModal} />
    </Fragment>
  );
};

export default Header;
