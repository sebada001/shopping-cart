import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./modules/App";
import About from "./modules/About";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
