// @flow
import * as React from "react";

import "./Card.css";

type Props = {
  children: React.Node[]
};

const Card = (props: Props): React.Node => {
  return <div className="Card">{props.children}</div>;
};

export default Card;
