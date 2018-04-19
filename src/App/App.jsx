// @flow
import * as React from "react";
import { Route, Switch } from "react-router-dom";

import About from "../routes/About";
import Home from "../routes/Home";

import Navbar from "../components/functionnal/navigation/Navbar";

import "./App.css";

const App = (): React.Node => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

export default App;
