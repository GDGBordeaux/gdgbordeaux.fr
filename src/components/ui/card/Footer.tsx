import * as React from "react";

import "./Footer.css";

type Props = {
  children: React.ReactNode[];
};

const Footer = ({ children }: Props) => <div className="Card-Footer">{children}</div>;

export default Footer;
