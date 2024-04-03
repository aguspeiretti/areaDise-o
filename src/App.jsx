import { Route, Routes } from "react-router-dom";
import "./App.css";
import Academikas from "./pages/Academikas/Academikas";
import Home from "./home/Home";
import Tesis from "./pages/Tesis y masters/Tesis";
import Plagium from "./pages/Plagium/Plagium";
import Xpandete from "./pages/Xpandete/Xpandete";
import ZonaGestion from "./pages/ZonaGestion/ZonaGestion";
import Apa from "./pages/APA/Apa";
import MiTfg from "./pages/miTFG/MiTfg";
import Ushuaia from "./pages/Ushuaia/Ushuaia";
import Tpf from "./pages/TPD/Tpf";
import Tfges from "./pages/TFGes/Tfges";
import TfgOnline from "./pages/TFGonline/TfgOnline";
import MundoJob from "./pages/MundoJob/MundoJob";
import Tutfg from "./pages/tuTFG/Tutfg";

function App() {
  return (
    <>
      <div className="App">
        <div className="pages-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Academikas" element={<Academikas />} />
            <Route path="/Tesis-y-masters" element={<Tesis />} />
            <Route path="/Plagium-and-cheker" element={<Plagium />} />
            <Route path="/Xpandete" element={<Xpandete />} />
            <Route path="/Zona-gestion" element={<ZonaGestion />} />
            <Route path="/Como-citar-en-APA" element={<Apa />} />
            <Route path="/Quiero-mi-TFG" element={<MiTfg />} />
            <Route path="/Ushuaia" element={<Ushuaia />} />
            <Route path="/TPD" element={<Tpf />} />
            <Route path="/TFG-es" element={<Tfges />} />
            <Route path="/TFG-online" element={<TfgOnline />} />
            <Route path="/MundoJob" element={<MundoJob />} />
            <Route path="/Tu-TFG" element={<Tutfg />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
