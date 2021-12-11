import React from "react";
import { times } from "lodash";
import DSixInput from "../DSixInput";
import "./TurnTracker.scss";

const TurnTracker = () => {
  const renderInputs = (i) => {
    return (
      <div className="turn" key={`turn-${i + 1}`}>
        <DSixInput className="roll-1" />
        <DSixInput className="roll-2" />
      </div>
    );
  };

  return (
    <div className="TurnTracker">
      <span className="sideways">TURNS</span>
      {times(9, (i) => renderInputs(i))}
    </div>
  );
};

export default TurnTracker;
