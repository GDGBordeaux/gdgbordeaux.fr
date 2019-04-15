import * as React from "react";

import "./Card.css";

type Props = {
  children: React.ReactNode[];
};

const Card = ({ children }: Props) => <div className="Card">{children}</div>;

export default Card;
