import React from "react";
import "./BetweenTwoCastles.scss";
import Resource from "../Resource/Resource";

const BetweenTwoCastles = () => {
  const renderInput = () => {
    return (
      <div className="input">
        <input type="number" min="1" max="6" />
      </div>
    );
  };

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
        {renderInput()}
        <Resource name="heart" secondName="heart" />
        <b />
        {renderInput()}
        {renderInput()}
        <Resource name="pumpkin" />
        {renderInput()}
        {renderInput()}
        <b />
        {renderInput()}
        {renderInput()}
        {renderInput()}
        <div className="door">
          <img src="/images/wooden-door.png" alt="door" />
        </div>
        {renderInput()}
        <b />
        {renderInput()}
        <div className="door">
          <img src="/images/stone-door.png" alt="door" />
        </div>
      </div>
    </>
  );
};

export default BetweenTwoCastles;
