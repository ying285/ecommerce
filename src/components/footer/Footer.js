import React from "react";
import Subfooter from "./Subfooter";
import MobilFooter from "./MobilFooter";

const Footer = () => {
  return (
    <div>
      <Subfooter />
      <div className=" bg-dark">text</div>
      <MobilFooter />
    </div>
  );
};

export default Footer;
