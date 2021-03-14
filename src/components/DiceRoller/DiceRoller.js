import React, { useState } from "react";
import "./DiceRoller.scss";
import getDieFace from "../../utilities/getDieFace";
import rollDice from "../../utilities/rollDice";

const DiceRoller = () => {
  const [diceState, setDiceState] = useState([
    { id: 1, dieFace: 1 },
    { id: 2, dieFace: 6 },
  ]);

  return (
    <button
      className="DiceRoller IconButton"
      onClick={() => rollDice(diceState, setDiceState)}
      type="button"
    >
      {diceState.map((die) => (
        <img
          className={`dieImage ${die.dieFace}`}
          key={`rolled-die-${die.id}`}
          src={getDieFace(die.dieFace)}
          alt={`${die.dieFace}die`}
        />
      ))}
    </button>
  );
};

export default DiceRoller;
