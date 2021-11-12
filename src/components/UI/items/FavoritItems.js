import React, { useContext } from "react";
import FavoritCartContext from "../../context/FavoritCartContext";
import InputForm from "../inputForm/InputForm";

const FavoritItems = () => {
  const { favoritState, dispatchFavorit } = useContext(FavoritCartContext);
  return (
    <ul className="list-unstyled">
      {favoritState.items.map((el) => (
        <li className=" border-bottom border-top p-2" key={el.id}>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <i
                className="bi bi-dash-circle-fill text-danger me-3"
                onClick={() => dispatchFavorit({ type: "NO_HEART", id: el.id })}
              ></i>

              <div className="fw-bolder">{el.title}</div>
            </div>

            <div>
              <img src={el.img} alt="img" style={{ width: "4rem" }} />
            </div>
          </div>
          <div className="fw-bolder bg-danger rounded text-center text-white w-25 mb-3">
            {el.rabattItem}
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between">
              {/* <i class="bi bi-dash-square-fill me-2"></i>
              {0}
              <i class="bi bi-plus-square-fill ms-2"></i>*/}
              <InputForm productId={el.id} productAmount={el.amount} />
            </div>

            <div className="me-3">
              <div>{el.pris}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FavoritItems;
