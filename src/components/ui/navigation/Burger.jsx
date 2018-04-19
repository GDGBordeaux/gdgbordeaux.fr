// @flow
import * as React from "react";

import "./Burger.css";

type Props = {
  onClick: () => void
};

const Burger = (props: Props): React.Node => {
  return (
    <span className="Navbar-Burger" onClick={props.onClick}>
      <svg
        className="Navbar-Burger-Icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </span>
  );
};

export default Burger;
