import React from "react";
import "./Wingspan.scss";
import { times } from "lodash";

const Wingspan = () => {
  const rewards = [
    "pumpkin",
    "coin",
    "star",
    "coin",
    "heart",
    "star",
    "heart",
    "pumpkin",
    "star",
  ];

  const renderBird = (i, wingspanOfBird) => {
    return (
      <div key={`bird-${i}`} className="bird">
        <span>{wingspanOfBird}</span>
        <div className="birdCells">
          {times(3, (j) => (
            <div key={j}>
              <input type="number" className="cell" />
            </div>
          ))}
          {times(3, (j) => (
            <img
              key={j}
              src={`/images/${rewards[j + i + 2 * i]}.png`}
              alt={rewards[j + i]}
              className="reward"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <p>
        Fill a square on any bird (left to right), then gain the bonus
        below that square
      </p>
      {renderBird(1, 7)}
      {renderBird(2, 12)}
      {renderBird(3, 16)}
      <p>Score 1 star per complete bird whose sum = wingspan.</p>
    </>
  );
};

export default Wingspan;
