import FavoritCartContext from "./FavoritCartContext";
import React, { useReducer } from "react";
import PopularaData from "../data/PopularaData";
import PopularaOverlayData from "../data/PopularaOverlayData";
import ExtraPrisData from "../data/ExtraPrisData";
import ExtraPrisOverlayData from "../data/ExtraPrisOverlayData";
const defaultFavoritState = {
  items: [],
};

const favoritReducer = (state, action) => {
  // add and remove favorit for populara pris data
  if (action.type === "HEART") {
    // if (state.items.find((item) => item.id === action.id)) {
    //   return state;
    // }
    const changedItems = [...state.items];
    changedItems.push(PopularaData.find((el) => el.id === action.id));
    return { ...state, items: changedItems };
  } else if (action.type === "HEART_MODAL") {
    const changedItems = [...state.items];
    changedItems.push(PopularaOverlayData.find((el) => el.id === action.id));
    return { ...state, items: changedItems };
  }

  // else if (action.type === "NO_HEART") {
  //   const changedItems = state.items.filter((item) => item.id !== action.id);
  //   return { ...state, items: changedItems };
  // add and remove favorit for extra pris data
  // }
  else if (action.type === "HEART_EXTRA") {
    const changedItems = [...state.items];
    changedItems.push(ExtraPrisData.find((el) => el.id === action.id));
    return { ...state, items: changedItems };
  } else if (action.type === "HEART_EXTRA_MODAL") {
    const changedItems = [...state.items];
    changedItems.push(ExtraPrisOverlayData.find((el) => el.id === action.id));
    return { ...state, items: changedItems };
  } else if (
    action.type === "NO_HEART_EXTRA" ||
    action.type === "NO_HEART" ||
    action.type === "NO_HEART_EXTRA_MODAL" ||
    action.type === "NO_HEART_MODAL"
  ) {
    const changedItems = state.items.filter((item) => item.id !== action.id);
    return { ...state, items: changedItems };
  }
  return state;
};

const FavoritProvider = (props) => {
  const [favoritState, dispatchFavorit] = useReducer(
    favoritReducer,
    defaultFavoritState
  );
  console.log(favoritState.items);
  const isFavorite = (id) => {
    const item = favoritState.items.find((item) => item.id === id);
    if (item) {
      return true;
    }
    return false;
  };

  return (
    <FavoritCartContext.Provider
      value={{ favoritState, dispatchFavorit, isFavorite }}
    >
      {props.children}
    </FavoritCartContext.Provider>
  );
};

export default FavoritProvider;
