import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Footer } from "./components";
import "./index.css";

const rootElement: HTMLElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);
