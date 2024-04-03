import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./tamañosMeta.css";

const TamañosMeta = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div className="meta-container">
      <div className="divisor-izquiedo-meta">
        <h3 className="titulos-secciones titulo-meta">Tamaños imagenes Meta</h3>
        <div className="ads">
          <h3 className="titulos-subsecciones" onClick={() => handleToggle(1)}>
            Tamaños Feed Facebook / Instagram
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
            Tamaños Stories Facebook / Instagram
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
            Tamaños Reels Facebook / Instagram
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
        </div>
        <h3 className="titulos-secciones titulo-meta">Tamaños videos Meta</h3>
        <div className="ads">
          <h3 className="titulos-subsecciones" onClick={() => handleToggle(4)}>
            Tamaños Feed Facebook / Instagram
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

          <h3 className="titulos-subsecciones" onClick={() => handleToggle(5)}>
            Tamaños Stories Facebook / Instagram
            {expanded === 5 ? (
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

          <h3 className="titulos-subsecciones" onClick={() => handleToggle(6)}>
            Tamaños Reels Facebook / Instagram
            {expanded === 6 ? (
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
      <div className="divisor-derecho-meta">
        {expanded === 1 ? (
          <div>
            <div>
              <h2>Recomendaciones de diseño</h2>
              <ul>
                <li>Tipo de archivo: JPG o PNG. </li>
                <li>Relación de aspecto: 1,91:1 a 1:1</li>
                <li>Resolución: 1080 × 1080 píxeles como mínimo. </li>
              </ul>
              <h2>Recomendaciones de texto</h2>
              <ul>
                <li>Texto principal: 125 caracteres </li>
                <li>Título: 27 caracteres. </li>
                <li>Descripción: 27 caracteres</li>
              </ul>
              <h2>Requisitos tecnicos</h2>
              <ul>
                <li>Tamaño de archivo máximo: 30 MB.</li>
                <li>Ancho mínimo: 600 píxeles.</li>
                <li>Altura mínima: 600 píxeles.</li>
                <li>Tolerancia de relación de aspecto: 3 %</li>
              </ul>
            </div>
          </div>
        ) : expanded === 2 ? (
          <div>
            <div>
              <h2>Recomendaciones de diseño</h2>
              <ul>
                <li>Tipo de archivo: JPG o PNG. </li>
                <li>Relación de aspecto: 9:16</li>
                <li>Resolución: 1080 × 1080 píxeles como mínimo. </li>
                <li>
                  Te recomendamos que dejes en torno al 14 % (250 píxeles) de la
                  parte slefaChevronLefterior y el 20 % (340 píxeles) de la
                  parte inferior de la imagen sin texto, logotipos u otros
                  elementos para evitar que queden ocultos por elementos de la
                  IU como, por ejemplo, la llamada a la acción.
                </li>
              </ul>
              <h2>Recomendaciones de texto</h2>
              <ul>
                <li>Texto principal: 125 caracteres </li>
                <li>Título: 40 caracteres. </li>
              </ul>
              <h2>Requisitos tecnicos</h2>
              <ul>
                <li>Tamaño de archivo máximo: 30 MB.</li>
                <li>Ancho mínimo: 500 píxeles.</li>
                <li>Tolerancia de relación de aspecto: 1 %.</li>
              </ul>
            </div>
          </div>
        ) : expanded === 3 ? (
          <div>
            <div>
              <h2>Recomendaciones de diseño</h2>
              <ul>
                <li>Tipo de archivo: JPG o PNG. </li>
                <li>Relación de aspecto: 9:16</li>
                <li>Resolución: 1080 × 1080 píxeles como mínimo. </li>
                <li>
                  El tamaño de la imagen es pequeño, por lo que recomendamos no
                  añadir texto a las imágenes.
                </li>
              </ul>
              <h2>Recomendaciones de texto</h2>
              <ul>
                <li>Texto principal: 72 caracteres. </li>
                <li>Título: 10 caracteres.</li>
              </ul>
              <h2>Requisitos tecnicos</h2>
              <ul>
                <li>Tamaño de archivo máximo: 30 MB.</li>
                <li>Ancho mínimo: 600 píxeles.</li>
                <li>Altura mínima: 600 píxeles.</li>
                <li>Tolerancia de relación de aspecto: 3 %.</li>
              </ul>
            </div>
          </div>
        ) : expanded === 4 ? (
          <div>
            <div>
              <h2>Recomendaciones de diseño</h2>
              <ul>
                <li>Tipo de archivo: MP4, MOV o GIF. </li>
                <li>
                  Relación de aspecto: 1:1 (para ordenadores o móviles) o 4:5
                  (solo para móviles)
                </li>
                <li>
                  Configuración de vídeo: compresión de vídeo H.264, píxeles
                  cuadrados, velocidad de fotogramas fija, escaneo progresivo y
                  compresión de audio AAC estéreo a partir de 128 kbps.{" "}
                </li>
                <li>Resolución: 1080 × 1080 píxeles como mínimo.</li>
                <li>Subtítulos del vídeo: opcionales, pero recomendados.</li>
                <li>Sonido del vídeo: opcional, pero recomendado.</li>
                <li>
                  Los vídeos no deben contener listas de edición ni cuadros
                  especiales en los contenedores de archivos.
                </li>
              </ul>
              <h2>Recomendaciones de texto</h2>
              <ul>
                <li>Texto principal: 125 caracteres </li>
                <li>Título: 27 caracteres. </li>
                <li>Descripción: 27 caracteres</li>
              </ul>
              <h2>Requisitos tecnicos</h2>
              <ul>
                <li>Duración del vídeo: de 1 segundo a 241 minutos.</li>
                <li>Tamaño de archivo máximo: 4 GB.</li>
                <li>Ancho mínimo: 120 píxeles.</li>
                <li>Altura mínima: 120 píxeles.</li>
              </ul>
            </div>
          </div>
        ) : expanded === 5 ? (
          <div>
            <div>
              <h2>Recomendaciones de diseño</h2>
              <ul>
                <li>Tipo de archivo: MP4, MOV o GIF.</li>
                <li>Relación de aspecto: 9:16</li>
                <li>
                  Configuración de vídeo: compresión de vídeo H.264, píxeles
                  cuadrados, velocidad de fotogramas fija, escaneo progresivo y
                  compresión de audio AAC estéreo a partir de 128 kbps.
                </li>
                <li>Resolución: 1080 × 1080 píxeles como mínimo.</li>
                <li>Subtítulos del vídeo: opcionales, pero recomendados.</li>
                <li>Sonido del vídeo: opcional, pero recomendado.</li>
                <li>
                  Los vídeos no deben contener listas de edición ni cuadros
                  especiales en los contenedores de archivos. Te recomendamos
                  que dejes en torno al 14 % (250 píxeles) del espacio en la
                  parte slefaChevronLefterior y el 20 % (340 píxeles) en la
                  parte inferior del vídeo sin texto ni logotipos para evitar
                  que los elementos de la UI, como la llamada a la acción, los
                  tapen.
                </li>
              </ul>
              <h2>Recomendaciones de texto</h2>
              <ul>
                <li>Texto principal: 125 caracteres </li>
                <li>Título: 40 caracteres. </li>
              </ul>
              <h2>Requisitos tecnicos</h2>
              <ul>
                <li>Duración del vídeo: de 1 segundo a 2 minutos.</li>
                <li>Tamaño de archivo máximo: 4 GB.</li>
                <li>Ancho mínimo: 500 píxeles.</li>
                <li>Tolerancia de relación de aspecto: 1 %.</li>
              </ul>
            </div>
          </div>
        ) : expanded === 6 ? (
          <div>
            <div>
              <h2>Recomendaciones de diseño</h2>
              <ul>
                <li>Tipo de archivo: MP4, MOV, GIF.</li>
                <li>Relación de aspecto: 9:16</li>
                <li>
                  Configuración de vídeo: compresión de vídeo H.264, píxeles
                  cuadrados, velocidad de fotogramas fija, escaneo progresivo y
                  compresión de audio AAC estéreo a partir de 128 kbps.
                </li>
                <li>Resolución: 1080 × 1080 píxeles como mínimo.</li>
                <li>Subtítulos del vídeo: opcional, pero recomendado.</li>
                <li>Sonido del vídeo: opcional, pero muy recomendado.</li>
                <li>
                  Los vídeos no deben contener listas de edición en los
                  contenedores de archivos.
                </li>
              </ul>
              <h2>Recomendaciones de texto</h2>
              <ul>
                <li>Texto principal: 72 caracteres. </li>
                <li>Título: 10 caracteres.</li>
                <li>Compatibilidad con subtítulos automáticos: no.</li>
              </ul>
              <h2>Requisitos tecnicos</h2>
              <ul>
                <li>Duración del vídeo: no hay límite máximo.</li>
                <li>Tamaño de archivo máximo: 4 GB.</li>
              </ul>
              <h2>Aspectos que debes evitar</h2>
              <ul>
                <li>Cuadros especiales: no.</li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TamañosMeta;
