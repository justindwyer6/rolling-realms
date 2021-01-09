import React from "react";
import { times } from "lodash";
import Die from "../Die/Die";
import WineGlass from "../WineGlass";
import "./Viticulture.scss";

const Viticulture = () => {
  const rewards = [
    "heart",
    "heart",
    "coin",
    "coin",
    "pumpkin",
    "pumpkin",
  ];

  const renderDie = (i) => {
    return (
      <Die
        key={`viticulture-d6-${i + 1}`}
        dieFace={i + 1}
        dieType="grape"
        initialDieState="available"
      />
    );
  };

  const renderRewards = (i) => {
    return (
      <img
        className="reward"
        key={`viticulture-rewards-${rewards[i]}-${i}`}
        src={`/images/${rewards[i]}.png`}
        alt={rewards[i]}
      />
    );
  };

  const renderWineOrders = (i) => {
    return (
      <div className="wineOrder" key={i}>
        <WineGlass
          key={i}
          wineGlassFill="/images/empty-wine-glass.png"
          i={i}
        />
        <div className="stars">
          <img src="/images/star.png" alt="star" />
          <img src="/images/star.png" alt="star" />
        </div>
      </div>
    );
  };

  return (
    <>
      <p>
        Either gain a grape (circle it) OR use the sum of 1 rolled die
        and at least 1 gained grape (cross it off) to fill a wine
        order.
      </p>
      {times(6, (i) => renderDie(i))}
      {times(6, (i) => renderRewards(i))}
      {times(3, (i) => renderWineOrders(i))}
    </>
  );
};

export default Viticulture;
