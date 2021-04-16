import React, { StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);
