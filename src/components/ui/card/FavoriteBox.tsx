import * as React from "react";
import "./FavoriteBox.css";

type Props = {
  children: React.ReactNode[];
  onClick: () => void;
};

const FavoriteBox = ({ children, ...props }: Props) => (
  <div {...props} className="Card-Favorite-Box">
    {children}
  </div>
);

export default FavoriteBox;
