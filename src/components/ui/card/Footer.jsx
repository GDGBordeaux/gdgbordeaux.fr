// @flow
import * as React from "react";

import "./Footer.css";

type Props = {
  children: React.Node[]
};

const Footer = (props: Props): React.Node => {
  return <div className="Card-Footer">{props.children}</div>;
};

export default Footer;
