import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Conduct from "./Conduct/Conduct";

const ConductIndex = () => (
  <Switch>
    <Route path="/codeofconduct" component={Conduct} exact />
  </Switch>
);

export default ConductIndex;
