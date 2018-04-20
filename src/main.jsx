import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import App from "./App/App";

import "./index.css";

export default () => {
  ReactDOM.render(
    <HashRouter>
      <Route render={App} />
    </HashRouter>,
    document.getElementById("root")
  );
};
