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

  const renderBirds = (i) => {
    return (
      <div key={`bird${i}`} className="bird">
        <p>{7 + i * 4 + (i ? 1 : 0)}</p>
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
      {times(3, (i) => renderBirds(i))}
      <p>Score 1 star per complete bird whose sum = wingspan.</p>
    </>
  );
};

export default Wingspan;
