import * as React from "react";

import "./Content.css";

type Props = {
  children: React.ReactNode[];
};

const Content = ({ children }: Props) => <div className="Card-Content">{children}</div>;

export default Content;
