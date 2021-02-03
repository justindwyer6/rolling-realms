import React from "react";
import { times } from "lodash";
import WineGlass from "../WineGlass";
import "./Viticulture.scss";
import ResourceDie from "../ResourceDie/ResourceDie";

const Viticulture = () => {
  const renderDie = (i, resources) => {
    return (
      <ResourceDie
        key={`viticulture-d6-${i + 1}`}
        dieFace={i + 1}
        dieType="grape"
        resourceName={resources[i]}
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
      <div className="game">
        {times(6, (i) =>
          renderDie(i, [
            "heart",
            "heart",
            "coin",
            "coin",
            "pumpkin",
            "pumpkin",
          ]),
        )}
        {times(3, (i) => renderWineOrders(i))}
      </div>
    </>
  );
};

export default Viticulture;
