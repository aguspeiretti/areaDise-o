/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import TamañosAds from "../../components/TamañosAds/TamañosAds";
import TamañosMeta from "../../components/TamañosMeta/TamañosMeta";
import "./tesis.css";

const Tesis = ({ seleccion }) => {
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
      <div className="titulo-proyecto">Tesis y masters</div>
      {seleccion === "colores" ? (
        <div className="colores-fuentes">
          <div className="colores-container">
            <div className="titulo-container">
              <h3 className="titulos-secciones">Colores</h3>
            </div>
            <div className="box-colorest">
              <div>
                <div className="opcion1">
                  <h3>Tesis y master general</h3>
                  <div className="c-container">
                    <div
                      className="box boxt1"
                      onClick={() => copyColorToClipboard("#080E2C")}
                    ></div>
                    <div
                      className="box boxt2"
                      onClick={() => copyColorToClipboard("#E1E1E0")}
                    ></div>
                    <div
                      className="box boxt3"
                      onClick={() => copyColorToClipboard("#F8F0EE")}
                    ></div>
                    <div
                      className="box boxt4"
                      onClick={() => copyColorToClipboard("#808080")}
                    ></div>
                  </div>
                </div>
                <div className="opcion2">
                  <h3>Tesis y master Argentina</h3>
                  <div className="c-container">
                    <div
                      className="box boxta1"
                      onClick={() => copyColorToClipboard("#080E2C")}
                    ></div>
                    <div
                      className="box boxta2"
                      onClick={() => copyColorToClipboard("#E1E1E0")}
                    ></div>
                    <div
                      className="box boxta3"
                      onClick={() => copyColorToClipboard("#F8F0EE")}
                    ></div>
                    <div
                      className="box boxta4"
                      onClick={() => copyColorToClipboard("#0094EA")}
                    ></div>
                  </div>
                </div>
                <div className="opcion1">
                  <h3>Tesis y master España</h3>
                  <div className="c-container">
                    <div
                      className="box boxte1"
                      onClick={() => copyColorToClipboard("#080E2C")}
                    ></div>
                    <div
                      className="box boxte2"
                      onClick={() => copyColorToClipboard("#E1E1E0")}
                    ></div>
                    <div
                      className="box boxte3"
                      onClick={() => copyColorToClipboard("#F8F0EE")}
                    ></div>
                    <div
                      className="box boxte4"
                      onClick={() => copyColorToClipboard("#9E192E")}
                    ></div>
                  </div>
                </div>
                <div className="opcion1">
                  <h3>Tesis y master Colombia</h3>
                  <div className="c-container">
                    <div
                      className="box boxtc1"
                      onClick={() => copyColorToClipboard("#080E2C")}
                    ></div>
                    <div
                      className="box boxtc2"
                      onClick={() => copyColorToClipboard("#E1E1E0")}
                    ></div>
                    <div
                      className="box boxtc3"
                      onClick={() => copyColorToClipboard("#F8F0EE")}
                    ></div>
                    <div
                      className="box boxtc4"
                      onClick={() => copyColorToClipboard("#DFBD5C")}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="opcion1">
                  <h3>Tesis y master Mexico</h3>
                  <div className="c-container">
                    <div
                      className="box boxm1"
                      onClick={() => copyColorToClipboard("#080E2C")}
                    ></div>
                    <div
                      className="box boxm2"
                      onClick={() => copyColorToClipboard("#E1E1E0")}
                    ></div>
                    <div
                      className="box boxm3"
                      onClick={() => copyColorToClipboard("#F8F0EE")}
                    ></div>
                    <div
                      className="box boxm4"
                      onClick={() => copyColorToClipboard("#2FD19B")}
                    ></div>
                  </div>
                </div>
                <div className="opcion2">
                  <h3>Tesis y master Chile</h3>
                  <div className="c-container">
                    <div
                      className="box boxch1"
                      onClick={() => copyColorToClipboard("#080E2C")}
                    ></div>
                    <div
                      className="box boxch2"
                      onClick={() => copyColorToClipboard("#E1E1E0")}
                    ></div>
                    <div
                      className="box boxch3"
                      onClick={() => copyColorToClipboard("#F8F0EE")}
                    ></div>
                    <div
                      className="box boxch4"
                      onClick={() => copyColorToClipboard("#EF3E44")}
                    ></div>
                  </div>
                </div>
                <div className="opcion1">
                  <h3>Tesis y master Peru</h3>
                  <div className="c-container">
                    <div
                      className="box boxp1"
                      onClick={() => copyColorToClipboard("#080E2C")}
                    ></div>
                    <div
                      className="box boxp2"
                      onClick={() => copyColorToClipboard("#E1E1E0")}
                    ></div>
                    <div
                      className="box boxp3"
                      onClick={() => copyColorToClipboard("#F8F0EE")}
                    ></div>
                    <div
                      className="box boxp4"
                      onClick={() => copyColorToClipboard("#7272AB")}
                    ></div>
                  </div>
                </div>
                <div className="opcion1">
                  <h3>Tesis y master Panama</h3>
                  <div className="c-container">
                    <div
                      className="box boxpa1"
                      onClick={() => copyColorToClipboard("#080E2C")}
                    ></div>
                    <div
                      className="box boxpa2"
                      onClick={() => copyColorToClipboard("#E1E1E0")}
                    ></div>
                    <div
                      className="box boxpa3"
                      onClick={() => copyColorToClipboard("#F8F0EE")}
                    ></div>
                    <div
                      className="box boxpa4"
                      onClick={() => copyColorToClipboard("#119DA4")}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fuentes-container">
            <h3 className="titulos-secciones">Fuentes</h3>
            <div className="box-fuentes">
              <h3
                className="glimer"
                onClick={() =>
                  handleFontDownload(
                    "../../assets/fonts/Gilmer-Font-20240401T185409Z-001.zip" // Ruta correcta hacia el archivo ZIP de la fuente Poppins
                  )
                }
              >
                Gilmer
              </h3>
              <h3
                className="quick-peach"
                onClick={() =>
                  handleFontDownload(
                    "../../assets/fonts/quick_peach.zip" // Ruta correcta hacia el archivo ZIP de la fuente Open Sans
                  )
                }
              >
                Quick peach
              </h3>
              <h3
                className="taken"
                onClick={() =>
                  handleFontDownload(
                    "../../assets/fonts/taken_by_vultures.zip" // Ruta correcta hacia el archivo ZIP de la fuente Poppins
                  )
                }
              >
                Taken
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
              <a
                href="https://drive.google.com/drive/u/1/folders/1Lgo2PNv81fPeXkAWtTxHv9e9piMQFn_C"
                target="_blank"
              >
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
                href="https://drive.google.com/drive/u/1/folders/12VyCGrXsETtOpUITeNpjiLmyFjxon1TU"
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

export default Tesis;
