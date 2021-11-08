import "./App.css";
import Mynavbar from "./components/navbar/Mynavbar";
import Subnavbar from "./components/navbar/Subnavbar";
import Header from "./components/header/Header";
import Extrapris from "./components/extrapris/Extrapris";
import Popularvaror from "./components/popularvaror/Popularvaror";
import Footer from "./components/footer/Footer";
import Advertisement from "./components/advertisement/Advertisement";
import ExtraPrisModal from "./components/UI/modal/ExtraPrisModal";
import PopularaModal from "./components/UI/modal/PopularaModal";
import FickModal from "./components/UI/modal/FickModal";
import HalloweenModal from "./components/UI/modal/HalloweenModal";
import ExtraPrisOverlayData from "./components/data/ExtraPrisOverlayData";
import PopularaOverlayData from "./components/data/PopularaOverlayData";
import React, { useState } from "react";
import FavoritProvider from "./components/context/FavoritProvider";
import VarorProvider from "./components/context/VarorProvider";

const App = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [currentExtraPris, setCurrentExtraPris] = useState({});
  const [showPopularaModal, setShowPopularaModal] = useState(false);
  const [currentPopularaPris, setCurrentPopularaPris] = useState({});
  const [myFickModal, setFickModal] = useState(false);
  const [myHalloweenModal, setMyHalloweenModal] = useState(false);

  //modal extra pris varor
  const handleShowModal = (dataId) => {
    const data = ExtraPrisOverlayData.find((el) => el.id === dataId);

    setCurrentExtraPris(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // modal popula varor

  const onShowPopularaModal = (popularaId) => {
    const popularaData = PopularaOverlayData.find((el) => el.id === popularaId);
    setCurrentPopularaPris(popularaData);
    setShowPopularaModal(true);
  };

  const onClosePopularaModal = () => {
    setShowPopularaModal(false);
  };

  // ficka modal
  const fickOpenModal = () => {
    setFickModal(true);
  };

  const fickCloseModal = () => {
    setFickModal(false);
  };

  // halloween modal

  const halloweenOpenModal = () => {
    setMyHalloweenModal(true);
  };

  const halloweenCloseModal = () => {
    setMyHalloweenModal(false);
  };

  return (
    <VarorProvider>
      <FavoritProvider>
        <div className="p-0 m-0 bg-light">
          <div className="fixed-top">
            <Mynavbar />

            <Subnavbar />
          </div>
          <div style={{ height: "6rem" }}></div>
          <Header />
          <Extrapris showModal={handleShowModal} />
          <Advertisement
            onLasamer={fickOpenModal}
            onLasamerHalloween={halloweenOpenModal}
          />
          <Popularvaror showPopularaModal={onShowPopularaModal} />
          <Footer />
          <ExtraPrisModal
            show={showModal}
            data={currentExtraPris}
            closeModal={handleCloseModal}
          />
          <PopularaModal
            showPopulara={showPopularaModal}
            dataPopulara={currentPopularaPris}
            closePopularaModal={onClosePopularaModal}
          />
          <FickModal showFick={myFickModal} closeFick={fickCloseModal} />
          <HalloweenModal
            showHalloween={myHalloweenModal}
            closeHalloween={halloweenCloseModal}
          />
        </div>
      </FavoritProvider>
    </VarorProvider>
  );
};

export default App;
