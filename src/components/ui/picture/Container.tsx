import * as React from "react";
import "./Container.css";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => <div className="TeamList">{children}</div>;

export default Container;
