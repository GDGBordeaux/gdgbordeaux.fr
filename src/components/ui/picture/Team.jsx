// @flow
import * as React from "react";

import "./Team.css";

type Props = {
  image: string,
  children: string
};

const Team = (props: Props): React.Node => {
  return (
    <div className="Team-Wrapper">
      <img className="Team" src={props.image} alt={props.children} />
      <span className="Team-Name">{props.children}</span>
    </div>
  );
};

export default Team;
