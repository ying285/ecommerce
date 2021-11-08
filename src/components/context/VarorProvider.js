import VarorCartContext from "./VarorCartContext";
import React, { useReducer } from "react";
import ExtraPrisData from "../data/ExtraPrisData";

const defaultVarorState = {
  items: [],
  amount: 0,
};

const varorReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.amount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      amount: updatedAmount,
    };
  }

  return defaultVarorState;
};

const VarorProvider = (props) => {
  const [varorState, dispatchVaror] = useReducer(
    varorReducer,
    defaultVarorState
  );

  const addVarorItemHandler = (amount) => {
    dispatchVaror({ type: "ADD", item: amount });
  };

  const removeVarorItemHandler = (id) => {
    dispatchVaror({ type: "REMOVE", id: id });
  };

  return (
    <VarorCartContext.Provider
      value={
        (varorState, dispatchVaror, addVarorItemHandler, removeVarorItemHandler)
      }
    >
      {props.children}
    </VarorCartContext.Provider>
  );
};

export default VarorProvider;
