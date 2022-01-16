import React from "react";
import Die from "components/Die";
import Resource from "components/Resource";
import Hexagon from "components/Hexagon";
import "./MyLittleScythe.scss";

const MyLittleScythe = () => {
  return (
    <>
      <p>
        Mark a hex and gain a pumpkin or heart. Gain a coin when you
        complete a matching pair (i.e. 1 & 1). Gain 2 stars each time
        you earn the 6th resource of each type (pumpkins, hearts,
        coins).
      </p>
      <div className="game">
        <div className="outerRow">
          <b />
          <Hexagon innerComponent={<Die dieFace={6} />} />
          <Hexagon innerComponent={<Die dieFace={1} />} />
          <b />
          <Hexagon innerComponent={<Die dieFace={6} />} />
          <Hexagon innerComponent={<Die dieFace={1} />} />
          <b />
        </div>

        <div className="innerRow">
          <b />
          <Hexagon innerComponent={<Die dieFace={5} />} />
          <Hexagon innerComponent={<Resource name="pumpkin" />} />
          <Hexagon innerComponent={<Die dieFace={2} />} />
          <b />
          <Hexagon innerComponent={<Die dieFace={5} />} />
          <Hexagon innerComponent={<Resource name="heart" />} />
          <Hexagon innerComponent={<Die dieFace={2} />} />
          <b />
        </div>

        <div className="outerRow">
          <b />
          <Hexagon innerComponent={<Die dieFace={4} />} />
          <Hexagon innerComponent={<Die dieFace={3} />} />
          <b />
          <Hexagon innerComponent={<Die dieFace={4} />} />
          <Hexagon innerComponent={<Die dieFace={3} />} />
          <b />
        </div>
      </div>
    </>
  );
};

export default MyLittleScythe;
