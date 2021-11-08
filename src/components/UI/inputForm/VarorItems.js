import { Tooltip, OverlayTrigger } from "react-bootstrap";
import InputForm from "./InputForm";
import Popularadata from "../../data/PopularaData";
import { useContext } from "react";
import VarorCartContext from "../../context/VarorCartContext";

const VarorItems = (props) => {
  const { varorState } = useContext(VarorCartContext);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Handla mindre 500kr tillkommer en avgift på 99kr
    </Tooltip>
  );

  const varorItem = (
    <ul className="list-unstyled">
      {varorState.items.map((el) => (
        <li className="  border-bottom p-2">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img src={el.img} alt="img" style={{ width: "4rem" }} />
              <div>
                <div className="fw-bolder ms-2">{el.title}</div>
                <div className="ms-2">{el.pris}</div>
              </div>
            </div>

            <InputForm productId={el.id} />
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="p-2">
      {varorItem}
      <div className="border-bottom">
        <div className="d-flex justify-content-between fs-6 fw-bolder mb-2">
          <span>Varor</span>
          <span>65.35kr</span>
        </div>
        <div className="d-flex justify-content-between fs-6 fw-bolder mb-2">
          <div>
            <span>Expenditionavgift</span>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <i class="bi bi-info-circle fs-6 ms-1" />
            </OverlayTrigger>
          </div>
          <span>99kr</span>
        </div>
      </div>

      <div className="d-flex justify-content-between fs-4 fw-bolder mt-3">
        <span>Totalt</span>
        <span>156.95kr</span>
      </div>
      <div className="d-flex justify-content-between fw-bolder text-secondary mb-5">
        <span>Varav moms</span>
        <span>16.81kr</span>
      </div>
      <button className="btn btn-danger rounded-pill w-100">Till Kassa</button>
    </div>
  );
};

export default VarorItems;
