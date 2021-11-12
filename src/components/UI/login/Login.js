import React, { useState } from "react";
import KundLogin from "../modal/KundLogin";

const Login = (props) => {
  const [loginModal, setLoginkModal] = useState(false);

  const kundLoginOpenModal = () => {
    setLoginkModal(true);
  };

  const kundLoginCloseModal = () => {
    setLoginkModal(false);
  };

  return (
    <div className="d-flex align-items-center me-3">
      <a href="#" className="text-decoration-none ms-3 me-1 fs-4 text-dark">
        <i
          className="bi bi-box-arrow-in-right fs-2 me-1"
          onClick={() => kundLoginOpenModal()}
        ></i>
      </a>
      <span style={{ fontSize: ".9rem" }}>Login</span>
      <KundLogin
        loginShow={loginModal}
        loginClose={kundLoginCloseModal}
        loginHandler={props.loginHandler}
      />
    </div>
  );
};

export default Login;
