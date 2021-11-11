import FavoritCartContext from "../../context/FavoritCartContext";
import React, { useContext } from "react";

const FavoritAmount = (props) => {
  const { favoritState } = useContext(FavoritCartContext);
  return (
    <div className="d-flex align-items-center">
      <i
        class={`bi ${
          favoritState.items.length > 0 ? "bi-heart-fill" : "bi-heart"
        }  fs-4 me-1 text-success`}
        onClick={() => props.publicHandleShow()}
      ></i>
      {/* <span style={{ fontSize: ".8rem" }}>Favoriter</span> */}
      <span
        className="bg-secondary rounded-pill badge"
        style={{ fontSize: ".6rem" }}
      >
        {favoritState.items.length}
      </span>
    </div>
  );
};

export default FavoritAmount;
