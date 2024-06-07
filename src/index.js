import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Importa el archivo CSS de Tailwind
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // Crear root usando la nueva API

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
