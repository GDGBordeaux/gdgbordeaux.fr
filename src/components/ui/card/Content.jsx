// @flow
import * as React from "react";

import "./Content.css";

type Props = {
  children: React.Node[]
};

const Content = (props: Props): React.Node => {
  return <div className="Card-Content">{props.children}</div>;
};

export default Content;
