const MobilFooter = () => {
  return (
    <div>
      <div className="bg-lighten d-lg-none d-flex flex-row justify-content-center align-items-center py-3">
        <div className="me-5 text-center ">
          <i class="bi bi-heart fs-4 d-flex flex-column"></i>
          <span style={{ fontSize: ".8rem" }}>Favoriter</span>
        </div>
        <div className="position-relative text-center">
          <i className="bi bi-cart3 fs-3 d-flex flex-column"></i>
          <span style={{ fontSize: ".8rem" }}>65</span>
          <span
            className="
          badge
          position-absolute
          top-0
          start-100
          translate-middle
          rounded-pill
          bg-danger
          "
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobilFooter;
