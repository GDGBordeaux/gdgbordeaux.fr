// @flow
import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Team from "./Team/Team";

const TeamIndex = (): React.Node => (
  <Switch>
    <Route path="/team" component={Team} exact />
  </Switch>
);

export default TeamIndex;
