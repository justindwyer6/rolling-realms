import React, { useState } from "react";
import pumpkin from "../../images/pumpkin.png";
import heart from "../../images/heart.png";
import coin from "../../images/coin.png";

const Reward = (round, reward, i) => {
  const [rewardState, setRewardState] = useState("available");

  const updateReward = () => {
    if (rewardState === "available") {
      setRewardState("gained");
    } else if (rewardState === "gained") {
      setRewardState("used");
    } else {
      setRewardState("available");
    }
  };

  const getRewardAsset = (thisReward) => {
    if (thisReward === "pumpkin") {
      return pumpkin;
    }
    if (thisReward === "heart") {
      return heart;
    }
    if (thisReward === "coin") {
      return coin;
    }
    throw Error(`Hmmm... ${thisReward} is not a valid reward.`);
  };

  return (
    <button
      type="button"
      aria-label={`Round ${round}: ${reward} ${i}`}
      title={`Round ${round}: ${reward} ${i}`}
      onClick={updateReward}
    >
      <img
        className={rewardState}
        src={getRewardAsset(reward)}
        alt={reward}
      />
    </button>
  );
};

export default Reward;
