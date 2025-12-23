import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

import "./App.css";

function App() {
  return (
    <div className="layout">
      <Outlet />
      <Sidebar />
    </div>
  );
}

export default App;
