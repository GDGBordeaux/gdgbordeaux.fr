// @flow
import * as React from "react";

import "./Paragraph.css";

type Props = {
  children: string
};

const Paragraph = (props: Props): React.Node => {
  return <p className="Card-Content-Paragraph">{props.children}</p>;
};

export default Paragraph;
