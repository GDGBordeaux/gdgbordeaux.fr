// @flow
import * as React from "react";

import "./Container.css";

type Props = {
  children: React.Node
};

const Container = ({ children }: Props): React.Node => <div className="TeamList">{children}</div>;

export default Container;
