import React from "react";
import ResourceTracker from "components/ResourceTracker";
import StarTracker from "components/StarTracker";
import TurnTracker from "components/TurnTracker";
import "./RoundTracker.scss";

const RoundTracker = ({ round }) => {
  return (
    <div className="RoundTracker">
      <StarTracker round={round} />
      <TurnTracker />
      <ResourceTracker round={round} resourceType="pumpkin" />
      <ResourceTracker round={round} resourceType="heart" />
      <ResourceTracker round={round} resourceType="coin" />
    </div>
  );
};

export default RoundTracker;
