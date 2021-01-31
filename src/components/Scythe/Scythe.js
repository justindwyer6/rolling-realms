import React from "react";
import { times } from "lodash";
import ResourceDie from "../ResourceDie/ResourceDie";
import "./Scythe.scss";
import starSrc from "../../images/star-filled.png";

const Scythe = () => {
  const renderTopRow = (i, resources) => (
    <ResourceDie
      key={`scythe-top-d6-${i + 1}`}
      dieFace={i + 1}
      dieType="standard"
      classes="topDie"
      resourceName={resources[i]}
    />
  );

  const renderBottomRow = (i, dice, resources) => (
    <ResourceDie
      key={`scythe-bottom-d6-${dice[i]}`}
      dieFace={dice[i]}
      dieType="standard"
      classes="bottomDie"
      resourceName={resources[i]}
      isMinusResource
    />
  );

  const renderStars = (i) => {
    return (
      <img
        key={`scythe-star-reward-${i}`}
        src={starSrc}
        alt="reward-star"
      />
    );
  };

  return (
    <>
      <p>
        Mark a #: The top row provides resource bonuses; the bottom
        row costs resources to gain stars. When you mark a top-row
        number, you may pay the bottom-row cost in the same column to
        mark it and gain its star.
      </p>
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
      {times(6, (i) => renderStars(i))}
    </>
  );
};

export default Scythe;
