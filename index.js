import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
