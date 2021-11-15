import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ExtraPrisData from "../data/ExtraPrisData";
import { Card } from "react-bootstrap";
import React, { useContext } from "react";
import FavoritCartContext from "../context/FavoritCartContext";
import InputForm from "../UI/inputForm/InputForm";

const Extrapris = (props) => {
  const { dispatchFavorit, isFavorite } = useContext(FavoritCartContext);
  return (
    <div>
      <h2 className="mb-5 p-2">Veckans extrapriser</h2>

      <div className="d-xl-none">
        {ExtraPrisData.map((el) => (
          <div
            className="card mb-3 p-3"
            style={{ maxWidth: "1200px" }}
            key={el.id}
          >
            <div>
              <div className="d-flex">
                <div style={{ width: "6rem" }}>
                  <img
                    src={el.img}
                    className="img-fluid rounded-start"
                    alt="img"
                  />
                </div>
                <div>
                  <i
                    key={el.id}
                    className={`bi ${
                      isFavorite(el.id) ? "bi-heart-fill" : "bi-heart"
                    } text-end p-3 fs-3 text-success`}
                    onClick={() =>
                      isFavorite(el.id)
                        ? dispatchFavorit({ type: "NO_HEART_EXTRA", id: el.id })
                        : dispatchFavorit({ type: "HEART_EXTRA", id: el.id })
                    }
                  />
                </div>
              </div>
              <div>
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">{el.text}</p>
                  <p
                    className="card-text bg-danger text-white text-center fw-bolder rounded p-1"
                    style={{ width: "8rem" }}
                  >
                    {el.rabatt}
                  </p>

                  <p className="card-text">{el.pris}</p>
                  <InputForm productId={el.id} key={el.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Swiper
        className="d-none d-xl-block ps-2"
        spaceBetween={230}
        slidesPerView={5}
        centeredSlides={false}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="d-flex">
          {ExtraPrisData.map((el) => (
            <SwiperSlide key={el.id}>
              <Card
                style={{ width: "18rem" }}
                className="me-3 mt-3 shadow"
                // onClick={() => {
                //   props.showModal(el.id);
                // }}
              >
                <span
                  className="
         
          position-absolute
          p-2
          badge
          text-white
          bg-danger
          "
                  style={{ top: "4%", left: "5%" }}
                >
                  {el.rabatt}
                </span>
                <i
                  key={el.id}
                  className={`bi ${
                    isFavorite(el.id) ? "bi-heart-fill" : "bi-heart"
                  } text-end p-3 fs-3 text-success`}
                  onClick={() =>
                    isFavorite(el.id)
                      ? dispatchFavorit({ type: "NO_HEART_EXTRA", id: el.id })
                      : dispatchFavorit({ type: "HEART_EXTRA", id: el.id })
                  }
                />
                <div style={{ width: "10rem" }} className="mx-auto">
                  <Card.Img
                    variant="top"
                    src={el.img}
                    onClick={() => {
                      props.showModal(el.id);
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
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Extrapris;
