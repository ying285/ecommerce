import SearchContext from "./SearchContext";
import React, { useReducer } from "react";
import ExtraPrisOverlayData from "../data/ExtraPrisOverlayData";
import PopularaOverlayData from "../data/PopularaOverlayData";
import SearchModal from "../UI/modal/SearchModal";

const allVaror = PopularaOverlayData.concat(ExtraPrisOverlayData);

const defaultSearchState = {
  item: "",
};

const searchReducer = (state, action) => {
  if (action.type === "SEARCH") {
    const item = allVaror.find((el) => el.title === action.title);
    if (item) {
      state.item = item;
      return state;
    } else {
      return;
    }
  }

  return defaultSearchState;
};

const SearchProvider = (props) => {
  const [searchState, dispatchSearch] = useReducer(
    searchReducer,
    defaultSearchState
  );

  const searchItemHandler = (title, handleShow) => {
    dispatchSearch({ type: "SEARCH", title, handleShow });
  };

  return (
    <SearchContext.Provider
      value={{ dispatchSearch, searchItemHandler, searchState }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
