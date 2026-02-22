import React from "react";
import { createRoot } from "react-dom/client";
import JewbleElevator from "../jewble-elevator.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JewbleElevator />
  </React.StrictMode>
);
