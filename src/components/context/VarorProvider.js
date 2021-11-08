import VarorCartContext from "./VarorCartContext";
import React, { useReducer } from "react";
import Popularadata from "../data/PopularaData";

const defaultVarorState = {
  items: [],
  totalAmount: 0,
};

const varorReducer = (state, action) => {
  if (action.type === "ADD") {
    let cartItem = state.items.find((item) => item.id === action.productId);
    if (cartItem) {
      cartItem.amount = action.amount;
    } else {
      cartItem = Popularadata.find((item) => item.id === action.productId);
    }
    const updatedItems = state.items.concat(cartItem);
    const updatedAmount = state.totalAmount + cartItem.pris * cartItem.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
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

  const removeVarorItemHandler = (id) => {
    dispatchVaror({ type: "REMOVE", id: id });
  };

  return (
    <VarorCartContext.Provider
      value={{
        varorState,
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
