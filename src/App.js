import "./App.css";
import Mynavbar from "./components/navbar/Mynavbar";
import Subnavbar from "./components/subnavbar/Subnavbar";
import Header from "./components/header/Header";
import Extrapris from "./components/extrapris/Extrapris";
import Popularvaror from "./components/popularvaror/Popularvaror";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="p-0 m-0">
      <Mynavbar />
      <Subnavbar />
      <Header />
      <Extrapris />
      <Popularvaror />
      <Footer />
    </div>
  );
};

export default App;
