import React from "react";
import "./MyLittleScythe.scss";
import Die from "../Die/Die";
import Resource from "../Resource/Resource";
import Hexagon from "../Hexagon/Hexagon";

const MyLittleScythe = () => {
  return (
    <>
      <p>
        Mark a hex and gain a pumpkin or heart. Gain 1 star if you’ve
        earned (A) 7+ pumpkins, (B) 7+ hearts, and (C) per pair of
        matching #s between the areas.
      </p>
      <div className="game">
        <div className="outerRow">
          <b />
          <Hexagon innerComponent={<Die dieFace={6} />} />

          <div className="hexagon">
            <Die dieFace={1} />
          </div>
          <b />
          <div className="hexagon">
            <Die dieFace={6} />
          </div>
          <div className="hexagon">
            <Die dieFace={1} />
          </div>
          <b />
        </div>

        <div className="innerRow">
          <b />
          <div className="hexagon">
            <Die dieFace={5} />
          </div>
          <div className="hexagon">
            <Resource name="pumpkin" />
          </div>
          <div className="hexagon">
            <Die dieFace={2} />
          </div>
          <b />
          <div className="hexagon">
            <Die dieFace={5} />
          </div>
          <div className="hexagon">
            <Resource name="heart" />
          </div>
          <div className="hexagon">
            <Die dieFace={2} />
          </div>
          <b />
        </div>

        <div className="outerRow">
          <b />
          <div className="hexagon">
            <Die dieFace={4} />
          </div>
          <div className="hexagon">
            <Die dieFace={3} />
          </div>
          <b />
          <div className="hexagon">
            <Die dieFace={4} />
          </div>
          <div className="hexagon">
            <Die dieFace={3} />
          </div>
          <b />
        </div>
      </div>
    </>
  );
};

export default MyLittleScythe;
