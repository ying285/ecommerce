import React, { Fragment } from "react";
import mat3 from "../../img/mat3.jpg";

const Header = () => {
  return (
    <Fragment>
      <div className="m-5 row">
        <div className="col-md-6">
          <img src={mat3} alt="foto" className="w-100" />
        </div>

        <div className=" mt-3 col-md-6">
          <h2>Ny här?</h2>
          <h5>
            Vi erbjuder utkörning av matvaror till mer än hälften av alla
            hushåll i Sverige. Tryck på knappen nedan och registera dig idag då
            får du 150kr rabatt i kassan.
          </h5>
          <button className="btn btn-primary btn-lg mt-xl-5 mt-2">
            Bli kunde nu{" "}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
