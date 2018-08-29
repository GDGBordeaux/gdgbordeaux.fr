// @flow
import * as React from "react";

import "./Content.css";

type Props = {
  children: React.Node[]
};

const Content = ({ children }: Props): React.Node => <div className="Card-Content">{children}</div>;

export default Content;
