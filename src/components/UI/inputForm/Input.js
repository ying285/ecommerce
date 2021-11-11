import React from "react";
import { useContext } from "react";
import VarorCartContext from "../../context/VarorCartContext";

const Input = React.forwardRef((props, ref) => {
  const { dispatchVaror, getVaraAmount } = useContext(VarorCartContext);

  return (
    <div className="d-flex align-items-center">
      <i
        class="bi bi-dash-square-fill me-2 fs-3 text-secondary"
        onClick={() => {
          let amount = getVaraAmount(props.productId);
          const totalAmount = amount - parseInt(ref.current.value);
          dispatchVaror({
            type: "REMOVE",
            productId: props.productId,
            amount: totalAmount,
          });
        }}
      />
      <input
        {...props.input}
        className=" form-control shadow-none w-50"
        ref={ref}
      />
      <i
        class="bi bi-plus-square-fill ms-2 fs-3 text-danger"
        onClick={() => {
          let amount = parseInt(ref.current.value);
          console.log(getVaraAmount(props.productId));
          const totalAmount = amount + getVaraAmount(props.productId);
          dispatchVaror({
            type: "ADD",
            productId: props.productId,
            amount: totalAmount,
          });
        }}
      />
    </div>
  );
});

export default Input;
