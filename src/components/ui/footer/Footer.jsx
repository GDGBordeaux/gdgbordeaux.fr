// @flow
import * as React from "react";

import "./Footer.css";

type Props = {
  children: React.Node[]
};

const Footer = ({ children }: Props): React.Node => <div className="Footer">{children}</div>;

export default Footer;
