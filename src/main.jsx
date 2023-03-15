import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import MainComponent from "./MainComponent.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <MainComponent />
  </React.StrictMode>
);
