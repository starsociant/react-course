import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { Footer, Header } from "./components";
import "./index.css";
import store from "./redux/store";

const rootElement: HTMLElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>
);
