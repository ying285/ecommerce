import VarorCartContext from "./VarorCartContext";
import React, { useReducer } from "react";
import Popularadata from "../data/PopularaData";
import ExtraPrisData from "../data/ExtraPrisData";

const defaultVarorState = {
  items: [],
  totalAmount: 0,
  numberOfItems: 0,
};

const getNumberOfItems = (updatedItems) => {
  const numberOfItems = updatedItems.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  return numberOfItems;
};

const getTotalAmount = (updatedItems) => {
  const updatedAmount = updatedItems.reduce((acc, curr) => {
    return acc + curr.amount * parseFloat(curr.pris);
  }, 0);
  return updatedAmount;
};

const varorReducer = (state, action) => {
  let allVaror = Popularadata.concat(ExtraPrisData);
  if (action.type === "ADD") {
    let updatedItems = [...state.items];

    let cartItem = updatedItems.find((item) => item.id === action.productId);

    if (cartItem) {
      cartItem.amount = action.amount;
    } else {
      cartItem = allVaror.find((item) => item.id === action.productId);
      updatedItems.push({ ...cartItem, amount: action.amount });
    }

    return {
      items: updatedItems,
      totalAmount: getTotalAmount(updatedItems),
      numberOfItems: getNumberOfItems(updatedItems),
    };
  }

  if (action.type === "REMOVE") {
    if (action.amount <= 0) {
      const items = state.items.filter((item) => item.id !== action.productId);
      return {
        ...state,
        items,
        totalAmount: getTotalAmount(items),
        numberOfItems: getNumberOfItems(items),
      };
    }

    const updatedItems = [...state.items];
    const itemToUpdate = updatedItems.find(
      (item) => item.id === action.productId
    );
    if (itemToUpdate) {
      itemToUpdate.amount = action.amount;
    }

    return {
      ...state,
      totalAmount: getTotalAmount(updatedItems),
      numberOfItems: getNumberOfItems(updatedItems),
      items: updatedItems,
    };
  }

  return defaultVarorState;
};

const VarorProvider = (props) => {
  const [varorState, dispatchVaror] = useReducer(
    varorReducer,
    defaultVarorState
  );

  const addVarorItemHandler = (productId, amount) => {
    dispatchVaror({ type: "ADD", productId, amount });
  };

  const getVaraAmount = (id) => {
    const item = varorState.items.find((vara) => vara.id === id);
    return item ? item.amount : 0;
  };

  // const addVarorItemHandler = (item) => {
  //   dispatchVaror({ type: "ADD", item });
  // };

  const removeVarorItemHandler = (productId) => {
    dispatchVaror({ type: "REMOVE", productId: productId });
  };

  return (
    <VarorCartContext.Provider
      value={{
        varorState,
        getVaraAmount,
        dispatchVaror,
        addVarorItemHandler,
        removeVarorItemHandler,
      }}
    >
      {props.children}
    </VarorCartContext.Provider>
  );
};

export default VarorProvider;
