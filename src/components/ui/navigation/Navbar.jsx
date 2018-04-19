// @flow
import * as React from "react";

import "./Navbar.css";

type Props = {
  to: string,
  children: React.Node[],
  className: string
};

const Navbar = (props: Props): React.Node => {
  return <nav className="Navbar">{props.children}</nav>;
};

export default Navbar;
