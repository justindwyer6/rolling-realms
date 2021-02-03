import React from "react";
import "./Tapestry.scss";
import ResourceGrid from "../ResourceGrid/ResourceGrid";

const Tapestry = () => {
  return (
    <>
      <p>
        Use 1 die to fill a shape (rotating is ok; no limit to uses of
        each #). Gain a bonus for completing BIG (2x2) squares. Score
        1 star per completed BIG (2x6) row/column (6 total).
      </p>
      <div className="game">
        <ResourceGrid resource="heart" />
      </div>
    </>
  );
};

export default Tapestry;
