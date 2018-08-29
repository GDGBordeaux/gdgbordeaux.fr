// @flow
import * as React from "react";

import "./Title.css";

type Props = {
  children: string
};

const Title = ({ children }: Props): React.Node => <h3>{children}</h3>;

export default Title;
