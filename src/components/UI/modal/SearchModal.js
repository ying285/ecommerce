import { Modal } from "react-bootstrap";
import InputForm from "../inputForm/InputForm";
import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import FavoritCartContext from "../../context/FavoritCartContext";

const SearchModal = () => {
  const { searchState, dispatchSearch } = useContext(SearchContext);
  const { dispatchFavorit, isFavorite } = useContext(FavoritCartContext);

  // // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  if (searchState.item) {
    return (
      <Modal
        show={searchState.showModal}
        onHide={() => dispatchSearch({ type: "SHOWMODAL", show: false })}
        animation={false}
      >
        <Modal.Header closeButton className="fs-4 fw-bolder">
          {searchState.item.title}
        </Modal.Header>
        <Modal.Body>
          <div className=" position-relative d-flex">
            <img src={searchState.item.img} alt="images" className="mx-auto" />
            <p className="position-absolute text-danger p-2 rounded  fw-bolder">
              {searchState.item.rabatt}
            </p>
            <i
              class={`bi ${
                isFavorite(searchState.item.id) ? "bi-heart-fill" : "bi-heart"
              } 
              } text-end fs-3 p-3 text-success position-absolute end-0`}
              style={{ top: "-1rem" }}
              onClick={() =>
                isFavorite(searchState.item.id)
                  ? dispatchFavorit({
                      type: "NO_HEART_EXTRA_MODAL",
                      id: searchState.item.id,
                    })
                  : dispatchFavorit({
                      type: "HEART_EXTRA_MODAL",
                      id: searchState.item.id,
                    })
              }
            />
          </div>
          <div className="d-flex justify-content-between mt-5">
            <p>
              <span className="fw-bolder">Vikt</span>: {searchState.item.weight}
            </p>
            <p>
              <span className="fw-bolder">Ursprung</span>:{" "}
              {searchState.item.Ursprung}
            </p>
          </div>
          <p className="text-danger">
            <span className="fw-bolder">MaxKöp</span>: {searchState.item.maxkop}
          </p>
          <p className="fw-bolder">{searchState.item.text}</p>
          <div className="ms-5">
            <p>{searchState.item.ing_1}</p>
            <p>{searchState.item.ing_2}</p>
            <p>{searchState.item.ing_3}</p>
            <p>{searchState.item.ing_4}</p>
            <p>{searchState.item.ing_5}</p>
            <p>{searchState.item.ing_6}</p>
            <p>{searchState.item.ing_7}</p>
            <p>{searchState.item.ing_8}</p>
            <p>{searchState.item.ing_9}</p>
            <p>{searchState.item.ing_10}</p>
            <p>{searchState.item.ing_11}</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <InputForm />
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal
        show={searchState.showModal}
        onHide={() => dispatchSearch({ type: "SHOWMODAL", show: false })}
        animation={false}
      >
        <Modal.Header
          closeButton
          className="fs-4 fw-bolder"
          style={{ backgroundColor: "#f0e5de" }}
        >
          {/* <h5>Inget objekt hittades</h5> */}
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f0e5de" }}>
          <div className="text-center fs-3 text-danger p-5 fw-bolder">
            Inget objekt hittades, försök igen!
          </div>
        </Modal.Body>
      </Modal>
    );
  }
};
export default SearchModal;
