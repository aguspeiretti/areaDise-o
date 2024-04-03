import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navRotate.css";

const NavRotate = () => {
  const [desplegable, setDesplegable] = useState(false);

  const handleMenu = () => {
    setDesplegable(!desplegable);
  };

  return (
    <>
      <div className="nav-container-rotate">
        <div className="icon-container" onClick={handleMenu}>
          <FontAwesomeIcon icon={faChevronDown} style={{ color: "#ffffff" }} />
        </div>
      </div>
      <div className={desplegable ? "desplegable open" : "desplegable"}>
        <ul>
          <Link onClick={handleMenu} to={"/Academikas"}>
            <li>Academikast</li>
          </Link>
          <Link onClick={handleMenu} to={"/Tesis-y-masters"}>
            <li>Tesis y masters</li>
          </Link>
          <Link onClick={handleMenu} to={"/Plagium-and-cheker"}>
            <li>Plagium and cheker</li>
          </Link>
          <Link onClick={handleMenu} to={"/Xpandete"}>
            <li>Xpandete</li>
          </Link>
        </ul>
        <ul>
          <Link onClick={handleMenu} to={"/Zona-gestion"}>
            <li>Zona gestion</li>
          </Link>
          <Link onClick={handleMenu} to={"/Como-citar-en-APA"}>
            <li>Como citar en APA</li>
          </Link>
          <Link onClick={handleMenu} to={"/Quiero-mi-TFG"}>
            {" "}
            <li>Quiero mi TFG</li>
          </Link>
          <Link onClick={handleMenu} to={"/Ushuaia"}>
            {" "}
            <li>Ushuaia</li>
          </Link>
        </ul>
        <ul>
          <Link onClick={handleMenu} to={"/TPD"}>
            {" "}
            <li>TPD</li>
          </Link>
          <Link onClick={handleMenu} to={"/TFG-es"}>
            {" "}
            <li>TFG.ES</li>
          </Link>
          <Link onClick={handleMenu} to={"/TFG-online"}>
            {" "}
            <li>TFG online</li>
          </Link>
          <Link onClick={handleMenu} to={"/MundoJob"}>
            {" "}
            <li>MundoJob</li>
          </Link>
        </ul>
        <ul>
          <Link onClick={handleMenu} to={"/Tu-TFG"}>
            {" "}
            <li>Tu TFG</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavRotate;
