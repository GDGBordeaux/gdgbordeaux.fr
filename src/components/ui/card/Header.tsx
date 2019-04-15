import * as React from "react";

import "./Header.css";

type Props = {
  image: string;
};

const Header = ({ image }: Props) => (
  <div className="Card-Header" style={{ backgroundImage: `url(${image})` }} />
);

export default Header;
