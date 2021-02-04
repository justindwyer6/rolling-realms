import React, { useState } from "react";
import "./Die.scss";
import d6Face1 from "../../images/d6-1.png";
import d6Face2 from "../../images/d6-2.png";
import d6Face3 from "../../images/d6-3.png";
import d6Face4 from "../../images/d6-4.png";
import d6Face5 from "../../images/d6-5.png";
import d6Face6 from "../../images/d6-6.png";
import grapeSrc from "../../images/grape.png";
import crushedGrapeSrc from "../../images/crushedGrape.png";

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
