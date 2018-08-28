// @flow
import * as React from "react";

import "./PageTitle.css";

type Props = {
  children: React.Node
};

const PageTitle = (props: Props): React.Node => {
  document.title = `GDG Bordeaux - ${props.children}`;
  return <h1 className="PageTitle">{props.children}</h1>;
};

export default PageTitle;
