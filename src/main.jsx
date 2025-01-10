import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";

import "./index.css";
import "./styles/backgrounds.css";
import "./styles/shapeDivs.css";
import Lp01 from "./pages/Lp01.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/aposentadoria" element={<Lp01 />} />
    </Routes>
  </Router>
);
