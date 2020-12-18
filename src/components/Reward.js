import React, { useState } from "react";

const Reward = ([round, reward, i]) => {
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

  return (
    <button
      type="button"
      aria-label={`Round ${round}: ${reward} ${i}`}
      title={`Round ${round}: ${reward} ${i}`}
      onClick={updateReward}
    >
      <img
        className={rewardState}
        src={`/images/${reward}.png`}
        alt={reward}
      />
    </button>
  );
};

export default Reward;
