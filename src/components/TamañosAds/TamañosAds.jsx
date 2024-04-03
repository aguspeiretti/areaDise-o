import { useState } from "react";
import "./tamañosAds.css";
import demanda from "../../assets/demanda.svg";
import display from "../../assets/display.svg";
import busqueda from "../../assets/busqueda.svg";
import videos from "../../assets/videos.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const TamañosAds = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div className="ads-container">
      <div className="divisor-izquierdo">
        <h3 className="titulos-secciones titulo-ads">Tamaños Google Ads</h3>
        <div className="ads">
          <h3 className="titulos-subsecciones" onClick={() => handleToggle(1)}>
            Campaña de generación de demanda
            {expanded === 1 ? (
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ marginLeft: 20, color: "#ffffff" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ marginLeft: 20, color: "#ffffff" }}
              />
            )}
          </h3>

          <h3 className="titulos-subsecciones" onClick={() => handleToggle(2)}>
            Campaña de display
            {expanded === 2 ? (
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ marginLeft: 20, color: "#ffffff" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ marginLeft: 20, color: "#ffffff" }}
              />
            )}
          </h3>

          <h3 className="titulos-subsecciones" onClick={() => handleToggle(3)}>
            Campaña de búsqueda
            {expanded === 3 ? (
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ marginLeft: 20, color: "#ffffff" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ marginLeft: 20, color: "#ffffff" }}
              />
            )}
          </h3>

          <h3 className="titulos-subsecciones" onClick={() => handleToggle(4)}>
            Campaña de video
            {expanded === 4 ? (
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ marginLeft: 20, color: "#ffffff" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ marginLeft: 20, color: "#ffffff" }}
              />
            )}
          </h3>
        </div>
      </div>
      <div className="divisor-derecho">
        {expanded === 1 ? (
          <div>
            <img src={demanda} alt="" />
          </div>
        ) : expanded === 2 ? (
          <div>
            <img src={display} alt="" />
          </div>
        ) : expanded === 3 ? (
          <div>
            <img src={busqueda} alt="" />
          </div>
        ) : expanded === 4 ? (
          <div>
            <img src={videos} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TamañosAds;
