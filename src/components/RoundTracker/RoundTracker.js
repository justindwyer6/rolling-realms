import React from "react";
import { times } from "lodash";
import ResourceTracker from "../ResourceTracker/ResourceTracker";
import StarTracker from "../StarTracker/StarTracker";
import "./RoundTracker.scss";

const RoundTracker = ({ round }) => {
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
    <div className="RoundTracker">
      <StarTracker round={round} />
      <div className="turnTracker">
        {times(9, (i) => renderInputs(i))}
      </div>
      <ResourceTracker resourceType="pumpkin" />
      <ResourceTracker resourceType="heart" />
      <ResourceTracker resourceType="coin" />
    </div>
  );
};

export default RoundTracker;
