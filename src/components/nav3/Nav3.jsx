/* eslint-disable react/prop-types */
import "./nav3.css";

const Nav3 = ({ onTituloChange }) => {
  const handleLinkClick = (titulo) => {
    onTituloChange(titulo);
  };

  return (
    <div className="nav3-container">
      <div className="desplegable-container">
        <ul>
          <li onClick={() => handleLinkClick("Academikast")}>Academikast</li>

          <li onClick={() => handleLinkClick("Tesis-y-masters")}>
            Tesis y masters
          </li>

          <li onClick={() => handleLinkClick("Plagium-and-cheker")}>
            Plagium and cheker
          </li>

          <li onClick={() => handleLinkClick("Xpandete")}>Xpandete</li>

          <li onClick={() => handleLinkClick("Zona-gestion")}>Zona gestion</li>

          <li onClick={() => handleLinkClick("Como-citar-en-APA")}>
            Como citar en APA
          </li>

          <li onClick={() => handleLinkClick("Quiero-mi-TFG")}>
            Quiero mi TFG
          </li>

          <li onClick={() => handleLinkClick("Ushuaia")}>Ushuaia</li>

          <li onClick={() => handleLinkClick("TPD")}>TPD</li>

          <li onClick={() => handleLinkClick("TFG-es")}>TFG.ES</li>

          <li onClick={() => handleLinkClick("TFG-online")}>TFG online</li>

          <li onClick={() => handleLinkClick("MundoJob")}>MundoJob</li>

          <li onClick={() => handleLinkClick("Tu-TFG")}>Tu TFG</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav3;
