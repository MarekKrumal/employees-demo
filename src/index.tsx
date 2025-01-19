import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // obal pro obaleni aplikace pro redux
import store from "./store"; // nase konfigureace Reduxu sore/index.ts
import App from "./components/App";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
