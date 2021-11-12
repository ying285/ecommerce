import ficka from "../../images/img2/ficka.jpg";
import halloween from "../../images/img2/halloween.jpg";

const Advertisement = (props) => {
  return (
    <div className="d-flex mt-5 justify-content-evenly row">
      <div
        className="card mb-3"
        style={{ maxWidth: "30rem", backgroundColor: "#fff9ec" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ficka} className="img-fluid rounded-start" alt="ficka" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Fika day</h5>
              <p className="card-text">
                Fikan är ofta i tyg eller liknande material, som har en öppning
                upptill. Öppningen kan ibland förslutas med knappar eller
                dragkedjor. Ibland sitter fickan innanför plaggets yttertyg,
                såsom exempelvis framfickorna.
              </p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => props.onLasamer()}
              >
                Läsa mer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card mb-3"
        style={{ maxWidth: "30rem", backgroundColor: "#e2eeee" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={halloween}
              className="img-fluid rounded-start"
              alt="halloween"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Halloween time</h5>
              <p className="card-text">
                Namnet kommer av engelskans all hallows eve, ”alla helgons
                afton”, kvällen före alla helgons dag som traditionellt infaller
                den 1 november. Halloween firas alltså egentligen den 31
                oktober.
              </p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => props.onLasamerHalloween()}
              >
                Läsa mer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
