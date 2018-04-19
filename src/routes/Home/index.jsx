// @flow
import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";

const HomeIndex = (): React.Node => (
  <Switch>
    <Route path="/" component={Home} exact />
  </Switch>
);

export default HomeIndex;
