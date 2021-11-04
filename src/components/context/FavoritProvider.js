import FavoritCartContext from "./FavoritCartContext";
import React, { useReducer } from "react";
import PopularaData from "../data/PopularaData";

const defaultFavoritState = {
  items: [],
  favorit: false,
};

const favoritReducer = (state, action) => {
  if (action.type === "HEART") {
    return { favorit: !state.favorit, id: action.id };
  }
};

const FavoritProvider = (props) => {
  const [favoritState, dispatchFavorit] = useReducer(
    favoritReducer,
    defaultFavoritState
  );

  const addFavoritItemHandler = (item) => {};
  const removeFavoritItemHandler = (id) => {};
  const changeFavoritState = (id) => {
    dispatchFavorit({ type: "HEART", id: id });
  };
  const favoritContext = {
    items: [],
    favorit: favoritState.favorit,
    addFavoritItem: addFavoritItemHandler,
    removeFavoritItem: removeFavoritItemHandler,
  };

  return (
    <FavoritCartContext.Provider value={{ favoritContext, changeFavoritState }}>
      {props.children}
    </FavoritCartContext.Provider>
  );
};

export default FavoritProvider;
