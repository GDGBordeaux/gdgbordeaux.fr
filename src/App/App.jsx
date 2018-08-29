// @flow
import * as React from "react";
import { Route, Switch } from "react-router-dom";

import About from "../routes/About";
import Conduct from "../routes/Conduct";
import Home from "../routes/Home";
import Team from "../routes/Team";

import Navbar from "../components/functionnal/navigation/Navbar";

import "./App.css";

const App = (): React.Node => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/team" component={Team} />
      <Route path="/codeofconduct" component={Conduct} />
      <Route path="/about" component={About} />
    </Switch>
    <button
      className="pwa-update"
      id="pwaUpdate"
      type="button"
      onKeyPress={event => {
        if (event.key === "Enter") {
          window.location.reload();
        }
      }}
      onClick={() => window.location.reload()}
      style={{ display: "none" }}
    >
      La page a été mise à jour. Cliquez la voir
    </button>
  </div>
);

export default App;
