import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Link.css";

type Props = {
  exact?: boolean;
  to: string;
  children: string;
  className?: string;
};

const Link = ({ children, className, exact, to }: Props) => {
  const classNames = `Navbar-Link ${className}`;

  if (to.indexOf("https://") > -1) {
    return (
      <a className={classNames} href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <NavLink exact={exact} className={classNames} to={to} activeClassName="Navbar-Link--active">
      {children}
    </NavLink>
  );
};

export default Link;
