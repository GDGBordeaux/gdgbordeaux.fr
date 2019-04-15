import * as React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./About/About";

const AboutIndex = () => (
  <Switch>
    <Route path="/about" component={About} exact />
  </Switch>
);

export default AboutIndex;
