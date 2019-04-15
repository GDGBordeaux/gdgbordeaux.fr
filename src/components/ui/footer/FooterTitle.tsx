import * as React from "react";
import "./FooterTitle.css";

type Props = {
  children: React.ReactNode;
};

const FooterTitle = ({ children }: Props) => <div className="FooterTitle">{children}</div>;

export default FooterTitle;
