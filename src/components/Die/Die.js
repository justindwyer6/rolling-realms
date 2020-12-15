import React, { useState } from "react";
import "./Die.scss";

const Die = ([dieType, initialDieState, dieFace]) => {
  const [dieState, setDieState] = useState(initialDieState);

  const updateStandardDie = () => {
    if (dieState === "unmarked") {
      setDieState("marked");
    } else {
      setDieState("unmarked");
    }
  };

  const updateGrapeDie = () => {
    if (dieState === "unmarked") {
      setDieState("marked");
    } else if (dieState === "marked") {
      setDieState("gained");
    } else {
      setDieState("unmarked");
    }
  };

  const updateDie = () => {
    if (dieType === "standard") {
      updateStandardDie();
    } else if (dieType === "grape") {
      updateGrapeDie();
    } else {
      throw Error(`Error: ${dieType} is not a valid die type.`);
    }
  };

  return (
    <button className="dieButton" onClick={updateDie} type="button">
      <img
        className={`${dieType} ${dieState}`}
        key={`${dieFace}die`}
        src={`./images/d6-${dieFace}.png`}
        alt={`${dieFace}die`}
      />
    </button>
  );
};

export default Die;
