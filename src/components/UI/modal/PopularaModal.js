import { Modal } from "react-bootstrap";
import React, { useContext } from "react";
import InputForm from "../inputForm/InputForm";
import FavoritCartContext from "../../context/FavoritCartContext";

const PopularModal = (props) => {
  const { dispatchFavorit, isFavorite } = useContext(FavoritCartContext);
  return (
    <>
      <Modal
        show={props.showPopulara}
        onHide={props.closePopularaModal}
        animation={false}
      >
        <Modal.Header closeButton className="fs-4 fw-bolder">
          {props.dataPopulara.title}
        </Modal.Header>
        <Modal.Body>
          <div className=" position-relative d-flex">
            <img
              src={props.dataPopulara.img}
              alt="images"
              className="mx-auto"
            />
            <p className="position-absolute bg-dark p-2 rounded-pill text-white fw-bolder fs-3">
              {props.dataPopulara.pris}
            </p>
            <i
              className={`bi ${
                isFavorite(props.dataPopulara.id) ? "bi-heart-fill" : "bi-heart"
              }  text-end fs-3 p-3 text-success position-absolute  end-0`}
              style={{ top: "-1rem" }}
              onClick={() =>
                isFavorite(props.dataPopulara.id)
                  ? dispatchFavorit({
                      type: "NO_HEART_MODAL",
                      id: props.dataPopulara.id,
                    })
                  : dispatchFavorit({
                      type: "HEART_MODAL",
                      id: props.dataPopulara.id,
                    })
              }
            />
          </div>
          <div className="d-flex justify-content-between mt-5">
            <p>
              <span className="fw-bolder">Vikt</span>:{" "}
              {props.dataPopulara.weight}
            </p>
            <p>
              <span className="fw-bolder">Ursprung</span>:{" "}
              {props.dataPopulara.Ursprung}
            </p>
          </div>

          <p className="fw-bolder">{props.dataPopulara.text}</p>
          <div className="ms-5">
            <p>{props.dataPopulara.ing_1}</p>
            <p>{props.dataPopulara.ing_2}</p>
            <p>{props.dataPopulara.ing_3}</p>
            <p>{props.dataPopulara.ing_4}</p>
            <p>{props.dataPopulara.ing_5}</p>
            <p>{props.dataPopulara.ing_6}</p>
            <p>{props.dataPopulara.ing_7}</p>
            <p>{props.dataPopulara.ing_8}</p>
            <p>{props.dataPopulara.ing_9}</p>
            <p>{props.dataPopulara.ing_10}</p>
            <p>{props.dataPopulara.ing_11}</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <InputForm />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopularModal;
