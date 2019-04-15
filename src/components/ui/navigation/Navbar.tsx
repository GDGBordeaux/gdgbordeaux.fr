import * as React from "react";

import "./Navbar.css";

type Props = {
  children: React.ReactNode[];
};

const Navbar = ({ children }: Props) => <nav className="Navbar">{children}</nav>;

export default Navbar;
