import React from "react";
import { times } from "lodash";
import RewardTracker from "../RewardTracker/RewardTracker";
import "./RoundTracker.scss";
import starIcon from "../../images/star-filled.png";

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
      <div className="roundScore">
        <h3 className="roundNumber">ROUND {round}</h3>
        <input
          className="roundTotal"
          type="number"
          name="roundTotal"
          maxLength="4"
        />
        <img className="starIcon" src={starIcon} alt="star" />
      </div>
      <div className="turnTracker">
        {times(9, (i) => renderInputs(i))}
      </div>
      <RewardTracker rewardType="pumpkin" />
      <RewardTracker rewardType="heart" />
      <RewardTracker rewardType="coin" />
    </div>
  );
};

export default RoundTracker;
