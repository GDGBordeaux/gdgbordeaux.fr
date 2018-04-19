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

  if (props.to.indexOf("https://") > -1) {
    return (
      <a className={classNames} href={props.to} target="_blank">
        {props.children}
      </a>
    );
  }

  return (
    <NavLink className={classNames} to={props.to} activeClassName="Navbar-Link--active">
      {props.children}
    </NavLink>
  );
};

export default Link;
