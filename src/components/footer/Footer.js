import React from "react";
import Subfooter from "./Subfooter";
import MobilFooter from "./MobilFooter";
import MainFooter from "./MainFooter";

const Footer = () => {
  return (
    <div>
      <Subfooter />
      <MainFooter />
      <div style={{ height: "3rem" }} className="d-lg-none"></div>
      <div className="fixed-bottom border-top bg-light d-lg-none">
        <MobilFooter />
      </div>
    </div>
  );
};

export default Footer;
