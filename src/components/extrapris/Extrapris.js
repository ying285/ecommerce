import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ExtraPrisData from "../data/ExtraPrisData";
import { Card, Button } from "react-bootstrap";

const Extrapris = (props) => {
  return (
    <div>
      <h2 className="mb-5">Veckans extrapriser</h2>

      <Swiper
        spaceBetween={235}
        slidesPerView={5}
        centeredSlides={false}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="d-flex">
          {ExtraPrisData.map((el) => (
            <SwiperSlide>
              <Card
                style={{ width: "18rem" }}
                className="me-3 mt-3 shadow"
                onClick={() => {
                  props.showModal(el.id);
                }}
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
                <i class="bi bi-heart text-end fs-3 p-3 text-secondary" />
                <Card.Img variant="top" src={el.img} />
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el.text}</Card.Text>
                  <Card.Text>{el.pris}</Card.Text>
                  <Button variant="danger">Lägga till</Button>
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
