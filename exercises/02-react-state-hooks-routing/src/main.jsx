import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

/** Components export default */
import Home from "./components/home.jsx";
import ToggleApp from "./components/toggle-visibility.jsx";
import ColorPicker from "./components/color-picker.jsx";
import FruitsSearch from "./components/fruits-search.jsx";
import OTPGenerator from "./components/otp-generator.jsx";
import SuperheroForm from "./components/superhero-form.jsx";
import EventRSVP from "./components/event-rsvp.jsx";
import ShoppingList from "./components/shopping-list.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="toggle-app" element={<ToggleApp />} />
          <Route path="color-picker" element={<ColorPicker />} />
          <Route path="fruits-search" element={<FruitsSearch />} />
          <Route path="otp-generator" element={<OTPGenerator />} />
          <Route path="superhero-form" element={<SuperheroForm />} />
          <Route path="event-rsvp" element={<EventRSVP />} />
          <Route path="shopping-list" element={<ShoppingList />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
