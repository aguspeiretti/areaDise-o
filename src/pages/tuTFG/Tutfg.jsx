/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import "./tutfg.css";
import TamañosAds from "../../components/TamañosAds/TamañosAds";
import TamañosMeta from "../../components/TamañosMeta/TamañosMeta";

const Tutfg = ({ seleccion }) => {
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
      <div className="titulo-proyecto">Tu TFG</div>
      {seleccion === "colores" ? (
        <div className="colores-fuentes">
          <div className="colores-container">
            <h3 className="titulos-secciones">Colores</h3>
            <div className="box-colores">
              <div
                className="box box1tf"
                onClick={() => copyColorToClipboard("#0094EA")}
              ></div>
              <div
                className="box box2tf"
                onClick={() => copyColorToClipboard("#0068A4")}
              ></div>
              <div
                className="box box3tf"
                onClick={() => copyColorToClipboard("#FFAA08")}
              ></div>
              <div
                className="box box4tf"
                onClick={() => copyColorToClipboard("#EBF2FA")}
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
                    "../../assets/fonts/Source Sans Pro-20240401T191345Z-001.zip" // Ruta correcta hacia el archivo ZIP de la fuente Poppins
                  )
                }
              >
                Source Sans
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
                href="https://drive.google.com/drive/u/1/folders/1YPv5w_M7mWEE2O2iTjMFSiPbyt1SsQf0"
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

export default Tutfg;
