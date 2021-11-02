import klarna from "../../images/img2/klarna.png";
import visaCard from "../../images/img2/visaCard.jpg";
import masterCard from "../../images/img2/masterCard.jpg";
import american from "../../images/img2/american.jpg";
import visaCardEl from "../../images/img2/visaCardEl.jpg";

const MainFooter = () => {
  return (
    <div className="bg-dark  p-5 row mx-auto" style={{ minHeight: "15rem" }}>
      <div className="col-lg-7">
        <div className="text-white list-unstyled ">
          <h5>Kontakt</h5>
          <div className="d-flex">
            <ul className="list-unstyled me-5">
              <li>info@dinmat.se</li>
              <li>Svarvägen 39</li>
              <li> 140 52 Stockholm</li>
            </ul>
            <ul className="list-unstyled">
              <li>Din mat AB</li>
              <li>Telefon: +46 8-65-23-98</li>
              <li>Org.nr 4590938-XXXX</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-5 d-flex">
        <div>
          <div className="p-2 border border-white ">
            <div>
              <img
                src={klarna}
                alt="klarna"
                style={{ width: "5rem" }}
                className="me-5 mb-3"
              />
              <div></div>
              <img
                src={visaCard}
                alt="visa-card"
                style={{
                  width: "5rem",
                }}
                className="me-2"
              />
              <img
                src={masterCard}
                alt="master-card"
                style={{
                  width: "5rem",
                }}
                className="me-2"
              />

              <img
                src={american}
                alt="american"
                style={{
                  width: "5rem",
                }}
                className="me-2"
              />
              <img
                src={visaCardEl}
                alt="visaCardEl"
                style={{
                  width: "5rem",
                }}
                className="me-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
