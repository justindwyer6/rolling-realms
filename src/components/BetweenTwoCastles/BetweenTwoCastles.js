import React from "react";
import "./BetweenTwoCastles.scss";

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
        those below. When you complete a column, gain a bonus.
      </p>

      <b />
      <div className="rewards no-border">
        <img
          src="/images/pumpkin.png"
          alt="pumpkin"
          className="reward"
        />
        <img
          src="/images/pumpkin.png"
          alt="pumpkin"
          className="reward overlay"
        />
      </div>
      <b />
      <b />
      <div className="rewards no-border">
        <img src="/images/coin.png" alt="reward" className="reward" />
        <img
          src="/images/heart.png"
          alt="reward"
          className="reward overlay"
        />
      </div>
      <div className="rewards no-border">
        <img src="/images/coin.png" alt="reward" className="reward" />
        <img
          src="/images/coin.png"
          alt="reward"
          className="reward overlay"
        />
      </div>
      <b />
      {renderInput()}
      <div className="rewards no-border">
        <img
          src="/images/heart.png"
          alt="reward"
          className="reward"
        />
        <img
          src="/images/heart.png"
          alt="reward"
          className="reward overlay"
        />
      </div>
      <b />
      {renderInput()}
      {renderInput()}
      <div className="rewards no-border">
        <img
          src="/images/pumpkin.png"
          alt="reward"
          className="reward"
        />
      </div>
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

      <p className="margin20">
        Score 1 star per completed row (each castle has 3 rows).
      </p>
    </>
  );
};

export default BetweenTwoCastles;
