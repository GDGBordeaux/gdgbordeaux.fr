// @flow
import * as React from "react";

import "./FooterTitle.css";

type Props = {
  children: React.Node
};

const FooterTitle = (props: Props): React.Node => {
  return <div className="FooterTitle">{props.children}</div>;
};

export default FooterTitle;
