// @flow
import * as React from "react";

import "./Card.css";

type Props = {
  children: React.Node[]
};

const Card = ({ children }: Props): React.Node => <div className="Card">{children}</div>;

export default Card;
