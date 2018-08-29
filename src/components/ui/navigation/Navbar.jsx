// @flow
import * as React from "react";

import "./Navbar.css";

type Props = {
  children: React.Node[]
};

const Navbar = ({ children }: Props): React.Node => <nav className="Navbar">{children}</nav>;

export default Navbar;
