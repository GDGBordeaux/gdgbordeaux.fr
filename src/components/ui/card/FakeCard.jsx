// @flow
import * as React from "react";

import "./FakeCard.css";

const FakeCard = (): React.Node => {
  return (
    <div className="FakeCard">
      <div className="FakeCard-Image" />
      <div className="FakeCard-Content">
        <div className="FakeCard-Title" />
        <div className="FakeCard-Text-2" />
        <div className="FakeCard-Text-3" />
        <div className="FakeCard-Text-1" />
      </div>
      <div className="FakeCard-Footer" />
    </div>
  );
};

export default FakeCard;
