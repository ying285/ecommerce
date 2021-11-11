import VarorCartContext from "../../context/VarorCartContext";
import { useContext } from "react";

const VarorAmount = () => {
  const { varorState } = useContext(VarorCartContext);

  return <div>{varorState.numberOfItems}</div>;
};

export default VarorAmount;
