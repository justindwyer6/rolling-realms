import React from "react";
import "./Wingspan.scss";
import { times } from "lodash";

const Wingspan = () => {
  const renderBird = (i, wingspanOfBird, rewardList) => {
    return (
      <div key={`bird-${i}`} className="bird">
        <span>{wingspanOfBird}</span>
        <div className="birdCells">
          {times(3, (j) => (
            <div key={`bird-${i}-input-${j}`}>
              <input type="number" className="cell" />
              <img
                src={`/images/${rewardList[j]}.png`}
                alt={rewardList[j]}
                className="reward"
              />
            </div>
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
      {renderBird(0, 7, ["pumpkin", "coin", "star"])}
      {renderBird(1, 12, ["coin", "heart", "star"])}
      {renderBird(2, 16, ["heart", "pumpkin", "star"])}
      <p>Score 1 star per complete bird whose sum = wingspan.</p>
    </>
  );
};

export default Wingspan;
