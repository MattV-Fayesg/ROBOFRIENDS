import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tachyons";
import reportWebVitals from "./reportWebVitals";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>
);

reportWebVitals();
