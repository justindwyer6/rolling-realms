import React, { useState } from "react";
import { times } from "lodash";
import Reward from "../Reward/Reward";
// import Rules from "../Rules";
import "./RoundTracker.scss";

const RoundTracker = ({ round }) => {
  const [rolledDice, setRolledDice] = useState([1, 6]);

  const rollDice = () => {
    times(6, (i) => {
      setTimeout(() => {
        setRolledDice([i, 7 - i]);
      }, 50 + i * 15);
    });
    setTimeout(() => {
      setRolledDice([
        Math.ceil(Math.random() * 6),
        Math.ceil(Math.random() * 6),
      ]);
    }, 350);
  };

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
      <div className="turnsC">
        <p className="sideways">TURNS</p>
        <div className="turns">
          {times(9, (i) => renderInputs(i))}
        </div>
      </div>
      <button
        type="button"
        aria-label="Roll Dice"
        title="Roll Dice"
        className="standardButton"
        onClick={rollDice}
      >
        <img
          className="rolledDie"
          src={`/images/d6-${rolledDice[0]}.png`}
          alt={`Die 1: ${rolledDice[0]}`}
        />
        <img
          className="rolledDie"
          src={`/images/d6-${rolledDice[1]}.png`}
          alt={`Die 2: ${rolledDice[1]}`}
        />
      </button>
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
