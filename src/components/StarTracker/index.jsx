import React from "react";
import "./StarTracker.scss";
import starIcon from "images/star-filled.png";

const StarTracker = ({ round }) => {
  return (
    <div className="StarTracker">
      <h2 className="roundNumber">
        {round ? `ROUND ${round}` : "TOTAL"}
      </h2>
      <input
        className="roundTotal"
        type="number"
        name="roundTotal"
        maxLength="4"
      />
      <img className="starIcon" src={starIcon} alt="star" />
    </div>
  );
};

export default StarTracker;
