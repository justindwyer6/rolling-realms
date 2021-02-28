import React from "react";
import { times } from "lodash";
import "./TurnTracker.scss";

const TurnTracker = () => {
  const renderInputs = (i) => {
    return (
      <div className="turn" key={`turn-${i + 1}`}>
        <input
          className="roll-1"
          type="number"
          name="roll-1"
          max="6"
          min="1"
          maxLength="1"
        />
        <input
          className="roll-2"
          type="number"
          name="roll=2"
          max="6"
          min="1"
          maxLength="1"
        />
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
