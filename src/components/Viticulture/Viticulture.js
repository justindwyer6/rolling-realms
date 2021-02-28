import React from "react";
import { times } from "lodash";
import WineGlass from "../WineGlass/WineGlass";
import "./Viticulture.scss";
import ResourceDie from "../ResourceDie/ResourceDie";
import Resource from "../Resource/Resource";

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

  const renderWineOrders = (i, sums) => {
    return (
      <div className="wineOrder" key={i}>
        <WineGlass key={i} sum={sums[i]} />
        <Resource name="star" />
        <Resource name="star" />
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
        {times(3, (i) => renderWineOrders(i, [10, 11, 12]))}
      </div>
    </>
  );
};

export default Viticulture;
