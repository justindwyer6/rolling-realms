import React, { useState } from "react";
import "./DiceRoller.scss";
import getDieFace from "../../functions/getDieFace";

const DiceRoller = () => {
  const [diceState, setDiceState] = useState([1, 6]);

  const rollDice = () => {
    console.log("heye");
    setDiceState([3, 4]);
  };

  return (
    <button
      className="DiceRoller Button"
      onClick={rollDice}
      type="button"
    >
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
