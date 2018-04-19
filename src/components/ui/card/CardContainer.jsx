// @flow
import * as React from "react";

import "./CardContainer.css";

type Props = {
  children: React.Node[] | React.Node
};

const CardContainer = (props: Props): React.Node => {
  return <div className="Card-Container">{props.children}</div>;
};

export default CardContainer;
