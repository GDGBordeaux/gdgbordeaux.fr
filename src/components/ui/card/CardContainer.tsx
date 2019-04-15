import * as React from "react";

import "./CardContainer.css";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

const CardContainer = ({ children }: Props) => <div className="Card-Container">{children}</div>;

export default CardContainer;
