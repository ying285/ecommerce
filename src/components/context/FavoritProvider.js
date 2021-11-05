import FavoritCartContext from './FavoritCartContext';
import React, { useReducer } from 'react';
// import PopularaData from '../data/PopularaData';
import { favoritReducer } from '../../reducers/FavoritReducer';

const defaultFavoritState = {
  items: [],
  //favorit: false,
};

const FavoritProvider = (props) => {
  const [favoritState, dispatchFavorit] = useReducer(
    favoritReducer,
    defaultFavoritState
  );

  const isFavorite = (id) => {
    const item = favoritState.items.find((item) => item.id === id);
    if (item) {
      return true;
    }
    return false;
  };

  // const addFavoritItemHandler = (item) => {};
  // const removeFavoritItemHandler = (id) => {};
  // const changeFavoritState = (id) => {
  //   dispatchFavorit({ type: "HEART", id: id });
  // };
  // const favoritContext = {
  //   items: [],
  //   favorit: favoritState.favorit,
  //   addFavoritItem: addFavoritItemHandler,
  //   removeFavoritItem: removeFavoritItemHandler,
  // };

  return (
    <FavoritCartContext.Provider
      value={{ favoritState, dispatchFavorit, isFavorite }}
    >
      {props.children}
    </FavoritCartContext.Provider>
  );
};

export default FavoritProvider;
