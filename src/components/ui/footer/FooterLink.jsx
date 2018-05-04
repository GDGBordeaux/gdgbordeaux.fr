// @flow
import * as React from "react";

import "./FooterLink.css";

type Props = {
  url: string,
  children: React.Node,
  label: string
};

const Footer = (props: Props): React.Node => {
  return (
    <a href={props.url} className="FooterLink" target="_blank">
      {props.children}
      <span className="FooterLink-Label">{props.label}</span>
    </a>
  );
};

export default Footer;
