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
        <Resource name="star" />
        <Resource name="star" />
        <Resource name="star" />
        <b />
        <div className="shapeKey">hi</div>
        <ResourceGrid resource="pumpkin" premarked="bottomRight" />
        <ResourceGrid resource="heart" />
        <ResourceGrid resource="coin" premarked="topRight" />
        <Resource name="star" />
        <ResourceGrid resource="coin" />
        <ResourceGrid resource="pumpkin" premarked="topLeft" />
        <ResourceGrid resource="heart" premarked="bottomRight" />
        <Resource name="star" />
        <ResourceGrid resource="heart" premarked="bottomLeft" />
        <ResourceGrid resource="coin" premarked="bottomRight" />
        <ResourceGrid resource="pumpkin" />
        <Resource name="star" />
      </div>
    </>
  );
};

export default Tapestry;
