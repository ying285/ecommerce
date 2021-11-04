import React from "react";

const FavoritCartContext = React.createContext({
  items: [],

  favoritState: false,
  addFavoritItem: (item) => {},
  removeFavoritItem: (id) => {},
});

export default FavoritCartContext;
