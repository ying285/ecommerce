import SearchContext from "./SearchContext";
import React, { useReducer } from "react";
import ExtraPrisOverlayData from "../data/ExtraPrisOverlayData";
import PopularaOverlayData from "../data/PopularaOverlayData";

const allVaror = PopularaOverlayData.concat(ExtraPrisOverlayData);

const defaultSearchState = {
  item: null,
  showModal: false,
};

const searchReducer = (state, action) => {
  if (action.type === "SEARCH") {
    const item = allVaror.find((el) => el.title === action.title);
    if (item) {
      return { ...state, item };
    } else {
      return { ...state, item: null };
    }
  } else if (action.type === "SHOWMODAL") {
    return { ...state, showModal: action.show };
  }
  return state;
};

const SearchProvider = (props) => {
  const [searchState, dispatchSearch] = useReducer(
    searchReducer,
    defaultSearchState
  );

  const searchItemHandler = (title) => {
    dispatchSearch({ type: "SEARCH", title });
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
