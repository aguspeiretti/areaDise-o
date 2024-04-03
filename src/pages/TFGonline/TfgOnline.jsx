/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import TamañosMeta from "../../components/TamañosMeta/TamañosMeta";
import TamañosAds from "../../components/TamañosAds/TamañosAds";
import "./tfgOnline.css";

const TfgOnline = ({ seleccion }) => {
  const copyColorToClipboard = (colorCode) => {
    navigator.clipboard
      .writeText(colorCode)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Copiado al portapapeles",
          text: ` "${colorCode}" `,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            background: "#000", // Fondo negro
            popup: "swal2-popup-custom",
          },
        });
      })
      .catch((error) => {
        console.error("Error al copiar al portapapeles: ", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al copiar al portapapeles.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };
  const handleFontDownload = (fontZip) => {
    try {
      const link = document.createElement("a");
      link.href = fontZip;
      link.download = fontZip.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al descargar la fuente: ", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al descargar la fuente.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  return (
    <div className="contenedor-primario">
      <div className="titulo-proyecto">TFG Online</div>
      {seleccion === "colores" ? (
        <div className="colores-fuentes">
          <div className="colores-container">
            <h3 className="titulos-secciones">Colores</h3>
            <div className="box-colores">
              <div
                className="box box1tfo"
                onClick={() => copyColorToClipboard("#00C18E")}
              ></div>
              <div
                className="box box2tfo"
                onClick={() => copyColorToClipboard("#0F5257")}
              ></div>
              <div
                className="box box3tfo"
                onClick={() => copyColorToClipboard("#FF5A76")}
              ></div>
              <div
                className="box box4tfo"
                onClick={() => copyColorToClipboard("#043B62")}
              ></div>
            </div>
          </div>
          <div className="fuentes-container">
            <h3 className="titulos-secciones">Fuentes</h3>
            <div className="box-fuentes">
              <h3
                className="poppins"
                onClick={() =>
                  handleFontDownload(
                    "../../assets/fonts/FUENTE-20240401T192520Z-001.zip" // Ruta correcta hacia el archivo ZIP de la fuente Poppins
                  )
                }
              >
                Roboto
              </h3>
            </div>
          </div>
        </div>
      ) : seleccion === "google-ads" ? (
        <div className="tamaños">
          <TamañosAds />
        </div>
      ) : seleccion === "imagines-meta" ? (
        <div className="tamaños-meta">
          <TamañosMeta />
        </div>
      ) : seleccion === "logos" ? (
        <div className="tamaños-meta">
          <div className="drive">
            <h3 className="titulos-secciones">Logos</h3>
            <div className="logos">
              <a href="" target="_blank">
                Click para descargar de Google drive!
              </a>
            </div>
          </div>
        </div>
      ) : seleccion === "recursos" ? (
        <div className="tamaños-meta">
          <div className="drive">
            <h3 className="titulos-secciones">Recursos</h3>
            <div className="recursos">
              <a
                href="https://drive.google.com/drive/u/1/folders/1c9qoob_t9q5vOCgPvhsguhnQFpKMMhro"
                target="_blank"
              >
                Click para descargar de Google drive!
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TfgOnline;
