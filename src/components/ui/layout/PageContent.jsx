// @flow
import * as React from "react";

import "./PageContent.css";

type Props = {
  children: React.Node
};

const PageContent = ({ children }: Props): React.Node => (
  <div className="PageContent">{children}</div>
);

export default PageContent;
