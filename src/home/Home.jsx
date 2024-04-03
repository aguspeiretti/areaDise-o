import SecondaryNav from "../components/SecondaryNav/SecondaryNav";
import Nav3 from "../components/nav3/Nav3";
import Academikas from "../pages/Academikas/Academikas";
import "./home.css";
import { useState } from "react";
import logo from "../assets/degrade.png";
import Tesis from "../pages/Tesis y masters/Tesis";
import Plagium from "../pages/Plagium/Plagium";
import Xpandete from "../pages/Xpandete/Xpandete";
import ZonaGestion from "../pages/ZonaGestion/ZonaGestion";
import Apa from "../pages/APA/Apa";
import Tutfg from "../pages/tuTFG/Tutfg";
import Ushuaia from "../pages/Ushuaia/Ushuaia";
import Tpd from "../pages/TPD/Tpf";
import TFGes from "../pages/TFGes/Tfges";
import TfgOnline from "../pages/TFGonline/TfgOnline";
import Mundojob from "../pages/MundoJob/MundoJob";
import MiTfg from "../pages/miTFG/MiTfg";

const Home = () => {
  const [titulo, setTitulo] = useState("Academikast");
  const [seleccion, setSeleccion] = useState("colores");
  const [desplegable, setDesplegable] = useState(false);

  const handleTitulo = (tituloSeleccionado) => {
    setTitulo(tituloSeleccionado);
    setDesplegable(false);
  };
  const handleSeleccion = (Seleccionado) => {
    setSeleccion(Seleccionado);
  };

  const handleMenu = () => {
    setDesplegable(!desplegable);
  };

  return (
    <>
      <div className="home-container">
        <div className="nav-logo">
          <div className="img-logo">
            <div onClick={handleMenu} className="img-cont">
              <img onClick={handleMenu} className="loguito" src={logo} alt="" />
            </div>
            <SecondaryNav onSeleccionChange={handleSeleccion} />
          </div>
        </div>
        <div className={desplegable ? "desplegable open" : "desplegable"}>
          <Nav3 onTituloChange={handleTitulo} />
        </div>
        <div className="img-bg">
          {titulo === "Academikast" ? (
            <Academikas seleccion={seleccion} />
          ) : titulo === "Tesis-y-masters" ? (
            <Tesis seleccion={seleccion} />
          ) : titulo === "Plagium-and-cheker" ? (
            <Plagium seleccion={seleccion} />
          ) : titulo === "Xpandete" ? (
            <Xpandete seleccion={seleccion} />
          ) : titulo === "Zona-gestion" ? (
            <ZonaGestion seleccion={seleccion} />
          ) : titulo === "Como-citar-en-APA" ? (
            <Apa seleccion={seleccion} />
          ) : titulo === "Quiero-mi-TFG" ? (
            <MiTfg seleccion={seleccion} />
          ) : titulo === "Ushuaia" ? (
            <Ushuaia seleccion={seleccion} />
          ) : titulo === "TPD" ? (
            <Tpd seleccion={seleccion} />
          ) : titulo === "TFG-es" ? (
            <TFGes seleccion={seleccion} />
          ) : titulo === "TFG-online" ? (
            <TfgOnline seleccion={seleccion} />
          ) : titulo === "MundoJob" ? (
            <Mundojob seleccion={seleccion} />
          ) : titulo === "Tu-TFG" ? (
            <Tutfg seleccion={seleccion} />
          ) : (
            <Academikas />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
