// @flow
import * as React from "react";
import { NavLink } from "react-router-dom";

import "./Link.css";

type Props = {
  to: string,
  children: string,
  className: string
};

const Link = (props: Props): React.Node => {
  const classNames = `Navbar-Link ${props.className}`;

  return (
    <NavLink to={props.to} activeClassName="Navbar-Link--active" className={classNames}>
      {props.children}
    </NavLink>
  );
};

export default Link;
