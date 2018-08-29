// @flow
import * as React from "react";

import "./CardContainer.css";

type Props = {
  children: React.Node[] | React.Node
};

const CardContainer = ({ children }: Props): React.Node => (
  <div className="Card-Container">{children}</div>
);

export default CardContainer;
