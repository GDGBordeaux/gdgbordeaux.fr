import * as React from "react";
import "./PageContent.css";

type Props = {
  children: React.ReactNode;
};

const PageContent = ({ children }: Props) => <div className="PageContent">{children}</div>;

export default PageContent;
