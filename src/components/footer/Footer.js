import React from "react";
import Subfooter from "./Subfooter";
import MobilFooter from "./MobilFooter";
import MainFooter from "./MainFooter";

const Footer = () => {
  return (
    <div>
      <Subfooter />
      <MainFooter />
      <MobilFooter />
    </div>
  );
};

export default Footer;
