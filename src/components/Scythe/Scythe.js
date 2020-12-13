import React from "react";
import Die from "../Die/Die";
import Star from "../Star/Star";
import "./Scythe.scss";
import { times } from "lodash";

class Scythe extends React.Component {
  topRewards = [
    "coin",
    "heart",
    "pumpkin",
    "coin",
    "heart",
    "pumpkin",
  ];
  bottomRewards = [
    "heart",
    "pumpkin",
    "coin",
    "pumpkin",
    "coin",
    "heart",
  ];
  scrambledDice = [5, 6, 2, 1, 4, 3];

  renderTopDie(i) {
    return (
      <Die
        key={`scythe-top-d6-${i + 1}`}
        dieFace={i + 1}
        dieType="standard"
        dieState="unmarked"
      />
    );
  }

  renderTopRewards(i, rewards) {
    return (
      <img
        className="topReward"
        key={`scythe-top-reward-${rewards[i]}+${i}`}
        src={`/images/${rewards[i]}.png`}
        alt={rewards[i]}
      />
    );
  }

  renderBottomDie(i, dice) {
    return (
      <Die
        key={`scythe-bottom-d6-${i + 1}`}
        dieFace={dice[i]}
        dieType="standard"
        dieState="unmarked"
      />
    );
  }

  renderBottomRewards(i, rewards) {
    return (
      <img
        className="bottomReward"
        key={`scythe-bottom-reward-${rewards[i]}+${i}`}
        src={`/images/${rewards[i]}.png`}
        alt={rewards[i]}
      />
    );
  }

  renderStars(i) {
    return <Star key={i} />;
  }

  render() {
    return (
      <>
        <p>
          Mark a #: The top row provides resource bonuses; the bottom
          row costs resources to gain stars. When you mark a top-row
          number, you may pay the bottom-row cost in the same column
          to mark it and gain its star.
        </p>
        <div className="scytheC">
          {times(6, (i) => this.renderTopDie(i))}
          {times(6, (i) => this.renderTopRewards(i, this.topRewards))}
          {times(6, (i) =>
            this.renderBottomDie(i, this.scrambledDice),
          )}
          {times(6, (i) =>
            this.renderBottomRewards(i, this.bottomRewards),
          )}
          {times(6, (i) => this.renderStars(i))}
        </div>
      </>
    );
  }
}

export default Scythe;
