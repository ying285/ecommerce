const Subfooter = () => {
  return (
    <div
      className=" d-sm-flex justify-content-evenly align-items-start p-5"
      style={{ minHeight: "20rem", backgroundColor: "#e2eeee" }}
    >
      <div>
        <ul className="list-unstyled">
          <li className="mb-4">
            <h5>Handla</h5>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              Vanliga frågor och svar
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              Så handlar du
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              Leveranstider
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="list-unstyled">
          <li className="mb-4">
            <h5>Din mat</h5>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              Om Din mat
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              Karriär
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              Press
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              Villkor och policyer
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="list-unstyled">
          <li className="mb-4">
            <h5>Kontakta oss</h5>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              Kundtjänst
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              <i className="bi bi-facebook"></i> Facebook
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </li>
          <li className="mb-4">
            <a href="/#" className="text-decoration-none text-dark">
              <i className="bi bi-twitter"></i> Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Subfooter;
