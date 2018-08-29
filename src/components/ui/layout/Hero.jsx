// @flow
import * as React from "react";

import "./Hero.css";

type Props = {
  children: string
};

const Hero = ({ children }: Props): React.Node => {
  document.title = children;

  return (
    <div className="Hero">
      <h1 className="Hero-Title">{children}</h1>
    </div>
  );
};

export default Hero;
