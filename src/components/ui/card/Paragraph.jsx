// @flow
import * as React from "react";

import "./Paragraph.css";

type Props = {
  children: string
};

const Paragraph = ({ children }: Props): React.Node => {
  return <p className="Card-Content-Paragraph" dangerouslySetInnerHTML={{ __html: children }} />;
};

export default Paragraph;
