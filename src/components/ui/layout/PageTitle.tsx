import * as React from "react";

import "./PageTitle.css";

type Props = {
  children: string;
};

const PageTitle = ({ children }: Props) => {
  document.title = `GDG Bordeaux - ${children}`;
  return <h1 className="PageTitle">{children}</h1>;
};

export default PageTitle;
