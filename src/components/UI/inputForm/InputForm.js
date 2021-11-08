import { useRef } from "react";
import Input from "./Input";
import { useContext } from "react";
import VarorCartContext from "../../context/VarorCartContext";

const InputForm = (props) => {
  const { addVarorItemHandler } = useContext(VarorCartContext);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = Number(enteredAmount);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    addVarorItemHandler(enteredAmountNumber);
  };

  return (
    <form className="d-flex justify-content-between" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
    </form>
  );
};

export default InputForm;
