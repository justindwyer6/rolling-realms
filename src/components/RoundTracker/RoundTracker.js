import React from "react";
import ResourceTracker from "../ResourceTracker/ResourceTracker";
import StarTracker from "../StarTracker/StarTracker";
import TurnTracker from "../TurnTracker/TurnTracker";
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
