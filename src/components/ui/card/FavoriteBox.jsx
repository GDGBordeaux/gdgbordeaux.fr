// @flow
import * as React from "react";

import "./FavoriteBox.css";

type Props = {
  children: React.Node[]
};

const FavoriteBox = (props: Props): React.Node => {
  return <div className="Card-Favorite-Box">{props.children}</div>;
};

export default FavoriteBox;
