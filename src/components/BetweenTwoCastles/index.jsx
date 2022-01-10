import React from "react";
import Resource from "components/Resource";
import DSixInput from "components/DSixInput";
import "./BetweenTwoCastles.scss";
import woodDoorSrc from "images/wooden-door.png";
import stoneDoorSrc from "images/stone-door.png";

const BetweenTwoCastles = () => (
  <>
    <p>
      Fill squares from the bottom up; #s on top must be lower than
      those below. When you complete a column, gain a bonus. Score 1
      star per completed row (each castle has 3 rows).
    </p>
    <div className="game">
      {/* Row 1 */}
      <b />
      <Resource name="pumpkin" secondName="pumpkin" />
      <b />
      <b />
      <Resource name="coin" secondName="heart" />
      <Resource name="coin" secondName="coin" />

      {/* Row 2 */}
      <b />
      <DSixInput className="left-top-center" />
      <Resource name="heart" secondName="heart" />
      <b />
      <DSixInput className="right-top-left" />
      <DSixInput className="right-top-right" />

      {/* Row 3 */}
      <Resource name="pumpkin" />
      <DSixInput className="left-center-center" />
      <DSixInput className="left-center-right" />
      <b />
      <DSixInput className="right-center-left" />
      <DSixInput className="right-center-right" />

      {/* Row 4 */}
      <DSixInput className="left-bottom-left" />
      <img className="door" src={woodDoorSrc} alt="door" />
      <DSixInput className="left-bottom-right" />
      <b />
      <DSixInput className="right-bottom-left" />
      <img className="door" src={stoneDoorSrc} alt="door" />
    </div>
  </>
);

export default BetweenTwoCastles;
