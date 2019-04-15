import * as React from "react";
import { ReactComponent as UserCircle } from "../svg/user_circle.svg";

import "./Team.css";

type Props = {
  image: string;
  children: string;
};

const Team = ({ children, image }: Props) => (
  <div className="Team-Wrapper">
    <div className="Team-Image">
      <img className="Team" src={image} alt={children} />
      <UserCircle className="Team-Border" />
    </div>
    <span className="Team-Name">{children}</span>
  </div>
);

export default Team;
