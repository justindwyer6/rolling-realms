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
      <ResourceTracker resourceType="pumpkin" />
      <ResourceTracker resourceType="heart" />
      <ResourceTracker resourceType="coin" />
    </div>
  );
};

export default RoundTracker;
