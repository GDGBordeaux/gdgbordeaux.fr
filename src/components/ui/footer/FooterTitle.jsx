// @flow
import * as React from "react";

import "./FooterTitle.css";

type Props = {
  children: React.Node
};

const FooterTitle = ({ children }: Props): React.Node => (
  <div className="FooterTitle">{children}</div>
);

export default FooterTitle;
