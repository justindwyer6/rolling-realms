import React, { useState } from "react";
import "./RewardTracker.scss";
import pumpkin from "../../images/pumpkin.png";
import heart from "../../images/heart.png";
import coin from "../../images/coin.png";

const RewardTracker = ({ rewardType }) => {
  const [rewardsEarned, setRewardsEarned] = useState(0);
  const [rewardsUsed, setRewardsUsed] = useState(0);

  // const [heartsEarned, setHeartsEarned] = useState(0);
  // const [heartsUsed, setHeartsUsed] = useState(0);

  // const [coinsEarned, setCoinsEarned] = useState(0);
  // const [coinsUsed, setCoinsUsed] = useState(0);

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
      <button
        type="button"
        onClick={() => setRewardsUsed(rewardsUsed + 1)}
      >
        -
      </button>
      <div>{rewardsEarned - rewardsUsed}</div>
      <img src={rewardSrc} alt={rewardType} />
      <button
        type="button"
        onClick={() => setRewardsEarned(rewardsEarned + 1)}
      >
        +
      </button>
    </div>
  );
};

export default RewardTracker;
