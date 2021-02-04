import React from "react";
import "./Tapestry.scss";
import ResourceGrid from "../ResourceGrid/ResourceGrid";
import Resource from "../Resource/Resource";
import Die from "../Die/Die";

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
        <div className="shapeKey">
          <div className="shape">
            <div className="shapeCell bottomLeft">
              <Die dieFace={1} button={false} />
            </div>
          </div>
          <div className="shape">
            <div className="shapeCell bottomLeft">
              <Die dieFace={2} button={false} />
            </div>
            <div className="shapeCell bottomCenter" />
          </div>
          <div className="shape">
            <div className="shapeCell bottomLeft">
              <Die dieFace={3} button={false} />
            </div>
            <div className="shapeCell bottomCenter" />
            <div className="shapeCell centerLeft" />
          </div>
          <div className="shape">
            <div className="shapeCell bottomLeft">
              <Die dieFace={4} button={false} />
            </div>
            <div className="shapeCell centerLeft" />
            <div className="shapeCell centerCenter" />
            <div className="shapeCell topLeft" />
          </div>
          <div className="shape">
            <div className="shapeCell bottomLeft">
              <Die dieFace={5} button={false} />
            </div>
            <div className="shapeCell bottomCenter" />
            <div className="shapeCell centerLeft" />
            <div className="shapeCell topLeft" />
            <div className="shapeCell bottomRight" />
          </div>
          <div className="shape">
            <div className="shapeCell bottomLeft">
              <Die dieFace={6} button={false} />
            </div>
            <div className="shapeCell bottomCenter" />
            <div className="shapeCell centerLeft" />
            <div className="shapeCell centerCenter" />
            <div className="shapeCell topLeft" />
            <div className="shapeCell bottomRight" />
          </div>
        </div>
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
