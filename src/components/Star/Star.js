import React, { useState } from "react";
import availableStar from "../../images/star-outline.png";
import earnedStar from "../../images/star-filled.png";

const Star = () => {
  const [starSource, setStarSource] = useState(availableStar);

  const updateStar = () => {
    if (starSource === availableStar) {
      setStarSource(earnedStar);
    } else {
      setStarSource(availableStar);
    }
  };

  return (
    <button className="starButton" onClick={updateStar} type="button">
      <img className="starButtonImage" src={starSource} alt="star" />
    </button>
  );
};

export default Star;
