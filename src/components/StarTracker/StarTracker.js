import React from "react";
import "./StarTracker.scss";
import starIcon from "../../images/star-filled.png";

const StarTracker = ({ round }) => {
  return (
    <div className="StarTracker">
      <h3 className="roundNumber">ROUND {round}</h3>
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
