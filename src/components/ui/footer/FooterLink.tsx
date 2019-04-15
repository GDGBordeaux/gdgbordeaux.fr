import * as React from "react";
import "./FooterLink.css";

type Props = {
  url: string;
  children: React.ReactNode;
  label: string;
};

const Footer = ({ children, label, url }: Props) => (
  <a href={url} className="FooterLink" target="_blank" rel="noopener noreferrer">
    {children}
    <span className="FooterLink-Label">{label}</span>
  </a>
);

export default Footer;
