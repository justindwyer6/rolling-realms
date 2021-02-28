import React from "react";
import { times } from "lodash";
import ResourceDie from "../ResourceDie/ResourceDie";
import "./Scythe.scss";

const Scythe = () => {
  const renderTopRow = (i, resources) => (
    <ResourceDie
      key={`scythe-top-d6-${i + 1}`}
      dieFace={i + 1}
      classes="topRow"
      resourceName={resources[i]}
    />
  );

  const renderBottomRow = (i, dice, resources) => (
    <ResourceDie
      key={`scythe-bottom-d6-${dice[i]}`}
      dieFace={dice[i]}
      classes="bottomRow"
      resourceName="star"
      resourceCost={resources[i]}
    />
  );

  return (
    <>
      <p>
        Mark a #: The top row provides resources; the bottom row costs
        resources to gain stars. When you mark a top-row number, you
        may pay the bottom-row cost in the same column to mark it and
        gain its star.
      </p>
      <div className="game">
        {times(6, (i) =>
          renderTopRow(i, [
            "coin",
            "heart",
            "pumpkin",
            "coin",
            "heart",
            "pumpkin",
          ]),
        )}
        {times(6, (i) =>
          renderBottomRow(
            i,
            [5, 6, 2, 1, 4, 3],
            ["heart", "pumpkin", "coin", "pumpkin", "coin", "heart"],
          ),
        )}
      </div>
    </>
  );
};

export default Scythe;
