import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
