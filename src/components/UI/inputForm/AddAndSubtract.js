import { useContext } from "react";
import VarorCartContext from "../../context/VarorCartContext";

const AddAndSubtract = (props) => {
  const { dispatchVaror, getVaraAmount } = useContext(VarorCartContext);
  return (
    <div>
      <i
        class="bi bi-dash-square-fill me-2 fs-3 text-secondary"
        onClick={() => {
          let amount = getVaraAmount(props.productId);
          const totalAmount = --amount;
          dispatchVaror({
            type: "REMOVE",
            productId: props.productId,
            amount: totalAmount,
          });
        }}
      />
      {getVaraAmount(props.productId)}

      <i
        class="bi bi-plus-square-fill ms-2 fs-3 text-danger"
        onClick={() => {
          let amount = getVaraAmount(props.productId);
          const totalAmount = ++amount;
          dispatchVaror({
            type: "ADD",
            productId: props.productId,
            amount: totalAmount,
          });
        }}
      />
    </div>
  );
};

export default AddAndSubtract;
