// @flow
import * as React from "react";

import "./FavoriteBox.css";

type Props = {
  children: React.Node[]
};

const FavoriteBox = ({ children, ...props }: Props): React.Node => (
  <div {...props} className="Card-Favorite-Box">
    {children}
  </div>
);

export default FavoriteBox;
