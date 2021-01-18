import React, { useState } from "react";
import "./RewardTracker.scss";
import pumpkin from "../../images/pumpkin.png";
import heart from "../../images/heart.png";
import coin from "../../images/coin.png";

const RewardTracker = ({ rewardType }) => {
  const [rewardsEarned, setRewardsEarned] = useState(0);
  const [rewardsUsed, setRewardsUsed] = useState(0);

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

  const earnReward = () => {
    setRewardsEarned(rewardsEarned + 1);
  };

  const useReward = () => {
    if (rewardsEarned === 0) {
      return;
    }
    if (rewardsEarned - rewardsUsed === 0) {
      return;
    }
    setRewardsUsed(rewardsUsed + 1);
  };

  return (
    <div className="RewardTracker">
      <button type="button" onClick={useReward}>
        -
      </button>
      <div className="rewardCount">{rewardsEarned - rewardsUsed}</div>
      <img src={rewardSrc} alt={rewardType} />
      <button type="button" onClick={earnReward}>
        +
      </button>
    </div>
  );
};

export default RewardTracker;
