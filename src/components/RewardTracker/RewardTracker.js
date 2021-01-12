import React from "react";
import "./RewardTracker.scss";
import pumpkin from "../../images/pumpkin.png";
import heart from "../../images/heart.png";
import coin from "../../images/coin.png";

const RewardTracker = ({ rewardType }) => {
  let rewardSrc;
  if (rewardType === "pumpkin") {
    rewardSrc = pumpkin;
  } else if (rewardType === "heart") {
    rewardSrc = heart;
  } else if (rewardType === "coin") {
    rewardSrc = coin;
  } else {
    rewardSrc = null;
    throw Error(`${rewardType} is not a valid type of reward.`);
  }

  return (
    <div className="RewardTracker">
      <div>12</div>
      <button type="button">+</button>
      <img src={rewardSrc} alt={rewardType} />
      <button type="button">-</button>
    </div>
  );
};

export default RewardTracker;
