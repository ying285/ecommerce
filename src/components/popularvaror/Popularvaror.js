import React, { useContext } from "react";
import FavoritCartContext from "../context/FavoritCartContext";
import InputForm from "../UI/inputForm/InputForm";
import { Card } from "react-bootstrap";
import Popularadata from "../data/PopularaData";

const Popularvaror = (props) => {
  const { dispatchFavorit, isFavorite } = useContext(FavoritCartContext);

  return (
    <div className="my-5">
      <h2>Populära varor</h2>
      <div className="d-flex flex-wrap mt-5 ms-5">
        {Popularadata.map((el) => (
          <Card
            key={el.id}
            style={{ width: "18rem" }}
            className="me-3 mt-3 shadow"
          >
            <i
              class={`bi ${
                isFavorite(el.id) ? "bi-heart-fill" : "bi-heart"
              } text-end p-3 fs-3 text-success`}
              onClick={() =>
                isFavorite(el.id)
                  ? dispatchFavorit({ type: "NO_HEART", id: el.id })
                  : dispatchFavorit({ type: "HEART", id: el.id })
              }
            />
            <Card.Img
              variant="top"
              src={el.img}
              onClick={() => {
                props.showPopularaModal(el.id);
              }}
            />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.text}</Card.Text>
              <Card.Text>{el.pris}</Card.Text>
              <InputForm productId={el.id} />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Popularvaror;
