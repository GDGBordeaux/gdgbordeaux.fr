// @flow
import * as React from "react";

import "./Title.css";

type Props = {
  children: string
};

const Title = (props: Props): React.Node => <h3>{props.children}</h3>;

export default Title;
