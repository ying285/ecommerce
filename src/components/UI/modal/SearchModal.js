import { Modal } from "react-bootstrap";
import InputForm from "../inputForm/InputForm";
import React, { useContext, useState, useEffect } from "react";
import SearchContext from "../../context/SearchContext";
import FavoritCartContext from "../../context/FavoritCartContext";

const SearchModal = (props) => {
  const { searchState, dispatchSearch } = useContext(SearchContext);
  const { dispatchFavorit, isFavorite } = useContext(FavoritCartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (searchState.item) {
      handleShow();
    } else {
      return;
    }
  }, [searchState.item]);

  // dispatchSearch({
  //   type: "SEARCH",
  // const closeModal = () => {
  //   dispatchSearch({ type: "SHOWMODAL", show: false });
  // };

  if (searchState.item) {
    return (
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton className="fs-4 fw-bolder">
          {searchState.item.title}
        </Modal.Header>
        <Modal.Body>
          <div className=" position-relative d-flex">
            <img src={searchState.item.img} alt="images" className="mx-auto" />
            <p className="position-absolute bg-danger p-2 rounded text-white fw-bolder">
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
      <Modal show={show} onHide={handleClose} animation={false}>
        <h5> no item found</h5>;
      </Modal>
    );
  }

  // return (
  //   <>
  //     <Modal show={show} onHide={handleClose} animation={false}>
  //       <Modal.Header closeButton className="fs-4 fw-bolder">
  //         {searchState.item.title}
  //       </Modal.Header>
  //       <Modal.Body>
  //         <div className=" position-relative d-flex">
  //           <img src={searchState.item.img} alt="images" className="mx-auto" />
  //           <p className="position-absolute bg-danger p-2 rounded text-white fw-bolder">
  //             {searchState.item.rabatt}
  //           </p>
  //           <i
  //             class={`bi ${
  //               isFavorite(searchState.item.id) ? "bi-heart-fill" : "bi-heart"
  //             }
  //             } text-end fs-3 p-3 text-success position-absolute end-0`}
  //             style={{ top: "-1rem" }}
  //             onClick={() =>
  //               isFavorite(searchState.item.id)
  //                 ? dispatchFavorit({
  //                     type: "NO_HEART_EXTRA_MODAL",
  //                     id: searchState.item.id,
  //                   })
  //                 : dispatchFavorit({
  //                     type: "HEART_EXTRA_MODAL",
  //                     id: searchState.item.id,
  //                   })
  //             }
  //           />
  //         </div>
  //         <div className="d-flex justify-content-between mt-5">
  //           <p>
  //             <span className="fw-bolder">Vikt</span>: {searchState.item.weight}
  //           </p>
  //           <p>
  //             <span className="fw-bolder">Ursprung</span>:{" "}
  //             {searchState.item.Ursprung}
  //           </p>
  //         </div>
  //         <p className="text-danger">
  //           <span className="fw-bolder">MaxKöp</span>: {searchState.item.maxkop}
  //         </p>
  //         <p className="fw-bolder">{searchState.item.text}</p>
  //         <div className="ms-5">
  //           <p>{searchState.item.ing_1}</p>
  //           <p>{searchState.item.ing_2}</p>
  //           <p>{searchState.item.ing_3}</p>
  //           <p>{searchState.item.ing_4}</p>
  //           <p>{searchState.item.ing_5}</p>
  //           <p>{searchState.item.ing_6}</p>
  //           <p>{searchState.item.ing_7}</p>
  //           <p>{searchState.item.ing_8}</p>
  //           <p>{searchState.item.ing_9}</p>
  //           <p>{searchState.item.ing_10}</p>
  //           <p>{searchState.item.ing_11}</p>
  //         </div>
  //       </Modal.Body>

  //       <Modal.Footer>
  //         <InputForm />
  //       </Modal.Footer>
  //    </Modal>
  //   </>
  // );
};

export default SearchModal;
