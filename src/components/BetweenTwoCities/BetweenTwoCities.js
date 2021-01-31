import React from "react";
import "./BetweenTwoCities.scss";
// import { times } from "lodash";
import Resource from "../Resource/Resource";

const BetweenTwoCities = () => {
  const renderInput = (i) => {
    return (
      <input
        key={`city-input-${i}`}
        type="number"
        className=""
        min="1"
        max="6"
      />
    );
  };

  return (
    <>
      <p>
        Fill a square; same #s can’t be orthogonally adjacent. Gain a
        bonus when you complete a row/column. Score stars equal to the
        lowest of the other 2 realms this round. This # cannot be
        higher than filled squares here.
      </p>
      <div className="game">
        <b />
        {renderInput(1)}
        {renderInput(2)}
        {renderInput(3)}
        <Resource name="pumpkin" secondName="coin" />
        <b />
        <b />
        {renderInput(4)}
        {renderInput(5)}
        {renderInput(6)}
        <Resource name="coin" secondName="heart" />
        <b />
        <b />
        {renderInput(7)}
        {renderInput(8)}
        {renderInput(9)}
        <Resource name="heart" secondName="pumpkin" />
        <b />
        <b />
        <Resource name="pumpkin" secondName="pumpkin" />
        <Resource name="coin" secondName="coin" />
        <Resource name="heart" secondName="heart" />
        <b />
        <b />
      </div>
    </>
  );
};

export default BetweenTwoCities;
