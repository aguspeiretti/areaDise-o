/* eslint-disable react/prop-types */
import "./secondaryNav.css";

const SecondaryNav = ({ onSeleccionChange }) => {
  const handleLinkClick = (seccion) => {
    onSeleccionChange(seccion);
  };

  return (
    <div className="secondary-nav">
      <ul className="nav">
        <li onClick={() => handleLinkClick("colores")}>Colores/Fuentes</li>

        <li onClick={() => handleLinkClick("google-ads")}>T.Google Ads</li>
        <li onClick={() => handleLinkClick("imagines-meta")}>
          T.Imagenes/videos Meta
        </li>
        <li onClick={() => handleLinkClick("logos")}>Logos</li>
        <li onClick={() => handleLinkClick("recursos")}>Recursos</li>
      </ul>
    </div>
  );
};

export default SecondaryNav;
