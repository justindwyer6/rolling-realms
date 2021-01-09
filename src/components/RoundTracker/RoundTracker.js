import React from "react";
import { times } from "lodash";
import Reward from "../Reward/Reward";
import "./RoundTracker.scss";
import starIcon from "../../images/star-filled.png";

const RoundTracker = ({ round }) => {
  const renderInputs = (i) => {
    return (
      <div className="turn" key={`turn-${i + 1}`}>
        <p>{i + 1}</p>
        <input className="roll-1" type="number" name="roll-1" />
        <input className="roll-2" type="number" name="roll=2" />
      </div>
    );
  };

  const renderRewards = (i, reward, thisRound) => {
    return (
      <Reward
        key={`round-${thisRound}-${reward}-${i}`}
        i={i}
        reward={reward}
        round={thisRound}
        rewardClasses="reward"
      />
    );
  };

  return (
    <div className="RoundTracker">
      <h3 className="roundNumber">ROUND {round}:</h3>
      <input className="roundTotal" type="number" name="roundTotal" />
      <img className="starIcon" src={starIcon} alt="star" />
      {times(9, (i) => renderInputs(i))}
      {times(12, (i) => renderRewards(i, "pumpkin", round))}
      {times(12, (i) => renderRewards(i, "heart", round))}
      {times(12, (i) => renderRewards(i, "coin", round))}
    </div>
  );
};

export default RoundTracker;
