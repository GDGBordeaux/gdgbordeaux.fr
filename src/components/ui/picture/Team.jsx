// @flow
import * as React from "react";

import "./Team.css";

type Props = {
  image: string,
  children: string
};

const Team = ({ children, image }: Props): React.Node => (
  <div className="Team-Wrapper">
    <img className="Team" src={image} alt={children} />
    <span className="Team-Name">{children}</span>
  </div>
);

export default Team;
