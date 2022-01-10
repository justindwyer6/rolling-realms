import React from "react";
import Resource from "components/Resource";
import DSixInput from "components/DSixInput";
import "./BetweenTwoCities.scss";

const BetweenTwoCities = () => (
  <>
    <p>
      Fill a square; same #s can’t be orthogonally adjacent. Gain a
      bonus when you complete a row/column. Score stars equal to the
      lowest of the other 2 realms this round. This # cannot be higher
      than filled squares here.
    </p>
    <div className="game">
      {/* Row 1 */}
      <DSixInput />
      <DSixInput />
      <DSixInput />
      <Resource name="pumpkin" secondName="coin" />

      {/* Row 2 */}
      <DSixInput />
      <DSixInput />
      <DSixInput />
      <Resource name="coin" secondName="heart" />

      {/* Row 3 */}
      <DSixInput />
      <DSixInput />
      <DSixInput />
      <Resource name="heart" secondName="pumpkin" />

      {/* Row 4 */}
      <Resource name="pumpkin" secondName="pumpkin" />
      <Resource name="coin" secondName="coin" />
      <Resource name="heart" secondName="heart" />
      <b />
    </div>
  </>
);

export default BetweenTwoCities;
