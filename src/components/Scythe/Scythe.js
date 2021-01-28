import React from "react";
import { times } from "lodash";
import Die from "../Die/Die";
import "./Scythe.scss";
// import heartSrc from "../../images/heart.png";
// import pumpkinSrc from "../../images/pumpkin.png";
// import coinSrc from "../../images/coin.png";
import starSrc from "../../images/star-filled.png";

const Scythe = () => {
  const topRewards = [
    "coin",
    "heart",
    "pumpkin",
    "coin",
    "heart",
    "pumpkin",
  ];

  const bottomRewards = [
    "heart",
    "pumpkin",
    "coin",
    "pumpkin",
    "coin",
    "heart",
  ];

  const scrambledDice = [5, 6, 2, 1, 4, 3];

  const renderTopDie = (i) => {
    return (
      <Die
        key={`scythe-top-d6-${i + 1}`}
        dieFace={i + 1}
        dieType="standard"
        classes="topDie"
      />
    );
  };

  const renderTopRewards = (i, rewards) => {
    return (
      <img
        className="topReward"
        key={`scythe-top-reward-${rewards[i]}+${i}`}
        src={`/images/${rewards[i]}.png`}
        alt={rewards[i]}
      />
    );
  };

  const renderBottomDie = (i, dice) => {
    return (
      <Die
        key={`scythe-bottom-d6-${i + 1}`}
        dieFace={dice[i]}
        dieType="standard"
        classes="bottomDie"
      />
    );
  };

  const renderBottomRewards = (i, rewards) => {
    return (
      <div className="bottomReward">
        <span>-</span>
        <img
          key={`scythe-bottom-reward-${rewards[i]}+${i}`}
          src={`/images/${rewards[i]}.png`}
          alt={rewards[i]}
        />
      </div>
    );
  };

  const renderStars = (i) => {
    return (
      <img
        key={`scythe-star-reward-${i}`}
        src={starSrc}
        alt="reward-star"
      />
    );
  };

  return (
    <>
      <p>
        Mark a #: The top row provides resource bonuses; the bottom
        row costs resources to gain stars. When you mark a top-row
        number, you may pay the bottom-row cost in the same column to
        mark it and gain its star.
      </p>
      {times(6, (i) => renderTopRewards(i, topRewards))}
      {times(6, (i) => renderTopDie(i))}
      {times(6, (i) => renderBottomDie(i, scrambledDice))}
      {times(6, (i) => renderBottomRewards(i, bottomRewards))}
      {times(6, (i) => renderStars(i))}
    </>
  );
};

export default Scythe;
