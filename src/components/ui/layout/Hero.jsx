// @flow
import * as React from "react";

import "./Hero.css";

type Props = {
  children: string
};

const Hero = (props: Props): React.Node => {
  return (
    <div className="Hero">
      <h1 className="Hero-Title">{props.children}</h1>
    </div>
  );
};

export default Hero;
