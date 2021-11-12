import Input from "./Input";
import { useContext, useRef } from "react";
import VarorCartContext from "../../context/VarorCartContext";

const InputForm = (props) => {
  const { dispatchVaror } = useContext(VarorCartContext);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = Number(enteredAmount);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      return;
    }

    console.log(enteredAmountNumber);
    dispatchVaror({
      type: "ADD",
      productId: props.productId,
      amount: enteredAmountNumber,
    });
  };

  return (
    <form className="d-flex justify-content-between" onSubmit={submitHandler}>
      <Input
        submitHandler={submitHandler}
        ref={amountInputRef}
        input={{
          key: props.productId,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: props.productAmount ? props.productAmount : "1",
        }}
        productId={props.productId}
      />
    </form>
  );
};

export default InputForm;
