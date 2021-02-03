import React from "react";
import "./Tapestry.scss";
import ResourceGrid from "../ResourceGrid/ResourceGrid";
import Resource from "../Resource/Resource";

const Tapestry = () => {
  return (
    <>
      <p>
        Use 1 die to fill a shape (rotating is ok; no limit to uses of
        each #). Gain a bonus for completing BIG (2x2) squares. Score
        1 star per completed BIG (2x6) row/column (6 total).
      </p>
      <div className="game">
        <ResourceGrid resource="pumpkin" />
        <ResourceGrid resource="heart" />
        <ResourceGrid resource="coin" />
        <Resource name="star" />
        <ResourceGrid resource="coin" />
        <ResourceGrid resource="pumpkin" />
        <ResourceGrid resource="heart" />
        <Resource name="star" />
        <ResourceGrid resource="heart" />
        <ResourceGrid resource="coin" />
        <ResourceGrid resource="pumpkin" />
        <Resource name="star" />
      </div>
    </>
  );
};

export default Tapestry;
