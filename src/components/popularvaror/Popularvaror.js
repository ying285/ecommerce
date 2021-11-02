import React from "react";

import { Card, Button } from "react-bootstrap";

import Popularadata from "../data/PopularaData";

const Popularvaror = (props) => {
  return (
    <div className="my-5">
      <h2>Populära varor</h2>
      <div className="d-flex flex-wrap mt-5 ms-4">
        {Popularadata.map((el) => (
          <Card
            style={{ width: "18rem" }}
            className="me-3 mt-3 shadow"
            onClick={() => {
              props.showPopularaModal(el.id);
            }}
          >
            <i class="bi bi-heart text-end p-3 fs-3 text-secondary" />
            <Card.Img variant="top" src={el.img} />
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
