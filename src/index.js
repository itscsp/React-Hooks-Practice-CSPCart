import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

import Context from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,

  document.getElementById("root")
);
