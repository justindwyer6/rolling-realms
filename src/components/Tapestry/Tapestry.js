import React from "react";
import "./Tapestry.scss";

const Tapestry = () => {
  return (
    <>
      <p>
        Use 1 die to fill a shape (rotating is ok; no limit to uses of
        each #). Gain a bonus for completing BIG (2x2) squares. Score
        1 star per completed BIG (2x6) row/column (6 total).
      </p>
      <div className="game" />
    </>
  );
};

export default Tapestry;
