import React from "react";
import Cardpopulara from "./Cardpopurlara";

import Popularadata from "../data/PopularaData";

const Popularvaror = (props) => {
  //   Popularvaror.map((el) => (
  //     <Cardpopulara key={el.id} img={el.img} title={el.title} text={el.text} />
  //   ));

  console.log(Popularadata);
  return (
    <div className="my-5">
      <h2>Populära varor</h2>
      <div className="row"></div>
    </div>
  );
};

export default Popularvaror;
