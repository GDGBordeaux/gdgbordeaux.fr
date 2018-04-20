// @flow
import * as React from "react";

import "./Container.css";

type Props = {
  children: React.Node
};

const Container = (props: Props): React.Node => {
  return <div className="TeamList">{props.children}</div>;
};

export default Container;
