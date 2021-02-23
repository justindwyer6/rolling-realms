import React, { useState } from "react";
import "./DiceRoller.scss";
import d6Face1 from "../../images/d6-1.png";
import d6Face2 from "../../images/d6-2.png";
import d6Face3 from "../../images/d6-3.png";
import d6Face4 from "../../images/d6-4.png";
import d6Face5 from "../../images/d6-5.png";
import d6Face6 from "../../images/d6-6.png";

const DiceRoller = () => {
  const [diceState, setDiceState] = useState([1, 6]);

  const getDieFace = (thisDieFace) => {
    if (thisDieFace === 1) {
      return d6Face1;
    }
    if (thisDieFace === 2) {
      return d6Face2;
    }
    if (thisDieFace === 3) {
      return d6Face3;
    }
    if (thisDieFace === 4) {
      return d6Face4;
    }
    if (thisDieFace === 5) {
      return d6Face5;
    }
    if (thisDieFace === 6) {
      return d6Face6;
    }
    throw Error(
      `Sorry, die can only be 1-6. ${thisDieFace} is not valid.`,
    );
  };

  const rollDice = () => {
    console.log("heye");
    setDiceState([3, 4]);
  };

  return (
    <button className="DiceRoller" onClick={rollDice} type="button">
      {diceState.map((dieFace) => (
        <img
          className={`dieImage ${dieFace}`}
          key={`${dieFace}die`}
          src={getDieFace(dieFace)}
          alt={`${dieFace}die`}
        />
      ))}
    </button>
  );
};

export default DiceRoller;
