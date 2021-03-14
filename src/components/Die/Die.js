import React, { useState } from "react";
import "./Die.scss";
import grapeSrc from "../../images/grape.png";
import crushedGrapeSrc from "../../images/crushedGrape.png";
import getDieFace from "../../utilities/getDieFace";

const Die = ({
  dieType = "standard",
  dieFace,
  button = true,
  classes,
}) => {
  const [dieState, setDieState] = useState("available");

  const updateStandardDie = () => {
    if (dieState === "available") {
      setDieState("marked");
    } else {
      setDieState("available");
    }
  };

  const updateGrapeDie = () => {
    if (dieState === "available") {
      setDieState("gained");
    } else if (dieState === "gained") {
      setDieState("used");
    } else {
      setDieState("available");
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

  const getGrapeSrc = () => {
    if (dieState === "available") {
      return null;
    }
    if (dieState === "gained") {
      return grapeSrc;
    }

    return crushedGrapeSrc;
  };

  if (button === false) {
    return (
      <img
        className="dieImage"
        key={`${dieFace}die`}
        src={getDieFace(dieFace)}
        alt={`${dieFace}die`}
      />
    );
  }

  return (
    <button
      className={`dieButton ${dieType} ${classes || ""}`}
      onClick={updateDie}
      type="button"
    >
      {dieType === "grape" && dieState !== "available" ? (
        <img src={getGrapeSrc()} alt="grape" className="grapeImage" />
      ) : null}
      <img
        className={`dieImage ${dieState}`}
        key={`${dieFace}die`}
        src={getDieFace(dieFace)}
        alt={`${dieFace}die`}
      />
    </button>
  );
};

export default Die;
