import React from "react";
import { times } from "lodash";
import Reward from "../Reward/Reward";
import "./RoundTracker.scss";

const RoundTracker = ({ round }) => {
  const renderInputs = (i) => {
    return (
      <div key={i}>
        <input className="input1" type="number" name="die1" />
        <input className="input2" type="number" name="die2" />
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
      <div className="turns">{times(9, (i) => renderInputs(i))}</div>
      <div className="roundTotal">
        <p>ROUND {round + 1}:</p>
        <input type="number" name="roundTotal" />
        <img src="/images/star.png" alt="star" />
      </div>
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
