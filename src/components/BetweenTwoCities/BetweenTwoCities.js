import React from "react";
import "./BetweenTwoCities.scss";
import { times } from "lodash";

const BetweenTwoCities = () => {
  const rowRewards = {
    a2: "pumpkin",
    b2: "coin",
    a5: "coin",
    b5: "heart",
    a8: "heart",
    b8: "pumpkin",
  };
  const columnRewards = ["pumpkin", "coin", "heart"];

  const renderCell = (i) => {
    return (
      <div key={i} className="input">
        <input type="number" className="" min="1" max="6" />
      </div>
    );
  };

  return (
    <>
      <p>
        Fill a square; same #s can’t be orthogonally adjacent. Gain a
        bonus when you complete a row/column.
      </p>
      {/* Render a 3x3 grid of inputs with two overlayed rewards appended to the end of each row */}
      {times(9, (i) => {
        console.log("index:");
        console.log(i + 1);
        console.log("Modulo:");
        console.log((i + 1) % 3);
        if ((i + 1) % 3 === 1) {
          return [<b />, renderCell(i)];
        }
        if ((i + 1) % 3 === 2) {
          return renderCell(i);
        }
        if ((i + 1) % 3 === 0) {
          return [
            renderCell(i),
            <div key={`rewards-${i}`} className="rewards">
              <img
                key={`reward-a-${i}`}
                className="reward"
                src={`/images/${rowRewards[`a${i}`]}.png`}
                alt={rowRewards[i - 4]}
              />
              <img
                key={`reward-b-${i}`}
                className="reward overlay"
                src={`/images/${rowRewards[`b${i}`]}.png`}
                alt={rowRewards[i - 3]}
              />
            </div>,
            <b />,
          ];
        }
        return null;
      })}
      <b />
      {times(3, (i) => (
        <div key={`rewards-${i}`} className="rewards">
          <img
            key={`reward-a-${i}`}
            className="reward"
            src={`/images/${columnRewards[i]}.png`}
            alt="reward"
          />
          <img
            key={`reward-b-${i}`}
            className="reward overlay"
            src={`/images/${columnRewards[i]}.png`}
            alt="reward"
          />
        </div>
      ))}
      <b />
      <b />
      <p>
        Score stars equal to the lowest of the other 2 realms this
        round. This # cannot be higher than filled squares here.
      </p>
    </>
  );
};

export default BetweenTwoCities;
