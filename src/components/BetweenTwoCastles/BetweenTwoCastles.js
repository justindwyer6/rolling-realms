import React from "react";
import "./BetweenTwoCastles.scss";
import Resource from "../Resource/Resource";

const BetweenTwoCastles = () => {
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
        <input type="number" min="1" max="6" />
        <Resource name="heart" secondName="heart" />
        <b />
        <input type="number" min="1" max="6" />
        <input type="number" min="1" max="6" />
        <Resource name="pumpkin" />
        <input type="number" min="1" max="6" />
        <input type="number" min="1" max="6" />
        <b />
        <input type="number" min="1" max="6" />
        <input type="number" min="1" max="6" />
        <input type="number" min="1" max="6" />
        <img src="/images/wooden-door.png" alt="door" />
        <input type="number" min="1" max="6" />
        <b />
        <input type="number" min="1" max="6" />
        <img src="/images/stone-door.png" alt="door" />
      </div>
    </>
  );
};

export default BetweenTwoCastles;
