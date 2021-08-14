import React from "react";
import "./Pendulum.scss";
import Die from "../Die/Die";
import Resource from "../Resource/Resource";

const Pendulum = () => {
  return (
    <>
      <p>
        Either mark a benefit with any # OR mark a specific # in an
        hourglass. Gain the contents of all outlined benefits when
        completing an hourglass. When completing an hourglass, gain
        stars for each selected benefit containing a star.
      </p>
      <div className="game">
        <div className="octagons">
          <Resource name="pumpkin" secondName="heart" />
          <Resource name="heart" secondName="coin" />
          <Resource name="pumpkin" secondName="coin" />
          <Resource name="star" />
          <Resource name="star" />
        </div>
        <div className="hourglasses">
          <div className="hourglass">
            <Die dieFace={6} />
          </div>
          <div className="hourglass">
            <Die dieFace={5} />
            <Die dieFace={4} />
          </div>
          <div className="hourglass">
            <Die dieFace={3} />
            <Die dieFace={2} />
            <Die dieFace={1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pendulum;
