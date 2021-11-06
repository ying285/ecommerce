import React, { useContext } from "react";
import FavoritCartContext from "../../context/FavoritCartContext";

const Items = () => {
  const { favoritState, dispatchFavorit } = useContext(FavoritCartContext);
  return (
    <ul className="list-unstyled">
      {favoritState.items.map((el) => (
        <li className="d-flex justify-content-between border-bottom border-top p-2">
          <div className="d-flex">
            <div>
              <i
                class="bi bi-dash-circle-fill text-danger me-3"
                onClick={() => dispatchFavorit({ type: "NO_HEART", id: el.id })}
              ></i>
            </div>
            <div>
              <div className="fw-bolder">{el.title}</div>
              <div>{el.pris}</div>
            </div>
          </div>

          <div>
            <img src={el.img} alt="img" style={{ width: "4rem" }} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Items;
