import React, { useContext } from "react";
import FavoritCartContext from "../context/FavoritCartContext";

import { Card, Button } from "react-bootstrap";
import Popularadata from "../data/PopularaData";

const Popularvaror = (props) => {
  const { favoritContext, changeFavoritState } = useContext(FavoritCartContext);

  console.log(favoritContext.favorit);
  return (
    <div className="my-5">
      <h2>Populära varor</h2>
      <div className="d-flex flex-wrap mt-5 ms-4">
        {Popularadata.map((el) => (
          <Card style={{ width: "18rem" }} className="me-3 mt-3 shadow">
            <i
              class={`bi ${
                favoritContext.favorit ? "bi-heart-fill" : "bi-heart"
              } text-end p-3 fs-3 text-secondary`}
              onClick={() => changeFavoritState(el.id)}
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
              <Button variant="danger">Lägg till</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Popularvaror;
