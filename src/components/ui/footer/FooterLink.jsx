// @flow
import * as React from "react";

import "./FooterLink.css";

type Props = {
  url: string,
  children: React.Node,
  label: string
};

const Footer = ({ children, label, url }: Props): React.Node => (
  <a href={url} className="FooterLink" target="_blank" rel="noopener noreferrer">
    {children}
    <span className="FooterLink-Label">{label}</span>
  </a>
);

export default Footer;
