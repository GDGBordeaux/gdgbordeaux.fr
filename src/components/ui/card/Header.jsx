// @flow
import * as React from "react";

import "./Header.css";

type Props = {
  image: string
};

const Header = (props: Props): React.Node => {
  return <div className="Card-Header" style={{ backgroundImage: "url(" + props.image + ")" }} />;
};

export default Header;
