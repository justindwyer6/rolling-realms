import React from "react";
import { times } from "lodash";
import Reward from "../Reward/Reward";
import "./RoundTracker.scss";

const RoundTracker = ({ round }) => {
  const renderInputs = (i) => {
    return (
      <div className="turn" key={`turn-${i}`}>
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
      <div className="roundTotal">
        <p>ROUND {round + 1}:</p>
        <input type="number" name="roundTotal" />
        <img src="/images/star.png" alt="star" />
      </div>
      {times(9, (i) => renderInputs(i))}
      <div className="rewards">
        {times(12, (i) => renderRewards(i, "pumpkin", round))}
      </div>
      <div className="rewards">
        {times(12, (i) => renderRewards(i, "heart", round))}
      </div>
      <div className="rewards">
        {times(12, (i) => renderRewards(i, "coin", round))}
      </div>
    </div>
  );
};

export default RoundTracker;
