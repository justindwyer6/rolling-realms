import React from "react";
import "./Wingspan.scss";
import { times } from "lodash";
import heartSrc from "../../images/heart.png";
import pumpkinSrc from "../../images/pumpkin.png";
import coinSrc from "../../images/coin.png";
import starSrc from "../../images/star-filled.png";

const heart = {
  src: heartSrc,
  name: "heart",
};

const pumpkin = {
  src: pumpkinSrc,
  name: "pumpkin",
};

const coin = {
  src: coinSrc,
  name: "coin",
};

const star = {
  src: starSrc,
  name: "star",
};

const Wingspan = () => {
  const renderBird = (i, wingspanOfBird, resourceList) => {
    return (
      <div key={`bird-${i}`} className="bird">
        <span>{wingspanOfBird}</span>
        {times(3, (j) => (
          <div
            key={`bird-${i}-input-${j}`}
            className="inputResourceContainer"
          >
            <input type="number" />
            <img
              src={resourceList[j].src}
              alt={resourceList[j].name}
              className="resource"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <p>
        Fill a square on any bird (left to right), then gain the bonus
        below that square. Score 1 star per complete bird whose sum =
        wingspan.
      </p>
      <div className="game">
        {renderBird(0, 7, [pumpkin, coin, star])}
        {renderBird(1, 12, [coin, heart, star])}
        {renderBird(2, 16, [heart, pumpkin, star])}
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </>
  );
};

export default Wingspan;
