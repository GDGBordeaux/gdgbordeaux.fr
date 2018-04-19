// @flow
import * as React from "react";

import "./PageContent.css";

type Props = {
  children: React.Node
};

const PageContent = (props: Props): React.Node => {
  return <div className="PageContent">{props.children}</div>;
};

export default PageContent;
