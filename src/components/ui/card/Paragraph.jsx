// @flow
import * as React from "react";

import "./Paragraph.css";

type Props = {
  children: string
};

const Paragraph = ({ children }: Props): React.Node => (
  // Data arrives from Firebase as a string, so we need to use dangerouslySetInnerHTML
  // to use it in the React app
  // eslint-disable-next-line react/no-danger
  <p className="Card-Content-Paragraph" dangerouslySetInnerHTML={{ __html: children }} />
);

export default Paragraph;
