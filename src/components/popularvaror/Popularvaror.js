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

      <div className="d-sm-none">
        {Popularadata.map((el) => (
          <div
            className="card mb-3 p-3"
            style={{ maxWidth: "540px" }}
            key={el.id}
          >
            <div className="">
              <div style={{ width: "6rem" }}>
                <img
                  src={el.img}
                  className="img-fluid rounded-start"
                  alt="img"
                />
              </div>
              <div>
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">{el.text}</p>
                  <p className="card-text">{el.pris}</p>
                  <InputForm productId={el.id} key={el.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-none d-sm-block">
        <div className="d-flex flex-wrap mt-5 ms-4 ">
          {Popularadata.map((el) => (
            <Card
              key={el.id}
              style={{ width: "18rem" }}
              className="me-3 mt-3 shadow"
            >
              <i
                key={el.id}
                className={`bi ${
                  isFavorite(el.id) ? "bi-heart-fill" : "bi-heart"
                } text-end p-3 fs-3 text-success`}
                onClick={() =>
                  isFavorite(el.id)
                    ? dispatchFavorit({ type: "NO_HEART", id: el.id })
                    : dispatchFavorit({ type: "HEART", id: el.id })
                }
              />
              <div style={{ width: "10rem" }} className="mx-auto">
                <Card.Img
                  variant="top"
                  src={el.img}
                  onClick={() => {
                    props.showPopularaModal(el.id);
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>{el.text}</Card.Text>
                <Card.Text>{el.pris}</Card.Text>
                <InputForm productId={el.id} key={el.id} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popularvaror;
