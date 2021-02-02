import React from "react";
import "./BetweenTwoCastles.scss";
import Resource from "../Resource/Resource";
import woodDoorSrc from "../../images/wooden-door.png";
import stoneDoorSrc from "../../images/stone-door.png";

const BetweenTwoCastles = () => {
  const renderInput = (location) => (
    <input
      key={location}
      className={location}
      type="number"
      min="1"
      max="6"
    />
  );

  return (
    <>
      <p>
        Fill squares from the bottom up; #s on top must be lower than
        those below. When you complete a column, gain a bonus. Score 1
        star per completed row (each castle has 3 rows).
      </p>
      <div className="game">
        <b />
        <Resource name="pumpkin" secondName="pumpkin" />
        <b />
        <b />
        <Resource name="coin" secondName="heart" />
        <Resource name="coin" secondName="coin" />
        <b />
        {renderInput("left-top-center")}
        <Resource name="heart" secondName="heart" />
        <b />
        {renderInput("right-top-left")}
        {renderInput("right-top-right")}
        <Resource name="pumpkin" />
        {renderInput("left-center-center")}
        {renderInput("left-center-right")}
        <b />
        {renderInput("right-center-left")}
        {renderInput("right-center-right")}
        {renderInput("left-bottom-left")}
        <img className="door" src={woodDoorSrc} alt="door" />
        {renderInput("left-bottom-right")}
        <b />
        {renderInput("right-bottom-left")}
        <img className="door" src={stoneDoorSrc} alt="door" />
      </div>
    </>
  );
};

export default BetweenTwoCastles;
