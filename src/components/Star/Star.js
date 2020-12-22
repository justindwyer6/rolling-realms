import React, { useState } from "react";
import availableStar from "../../images/star-outline.png";
import earnedStar from "../../images/star.png";

const Star = () => {
  const [starSource, setStarSource] = useState(availableStar);

  const updateStar = () => {
    if (starSource === availableStar) {
      setStarSource({ src: earnedStar });
    } else {
      setStarSource({ src: availableStar });
    }
  };

  return (
    <button className="starButton" onClick={updateStar} type="button">
      <img className="star" src={starSource} alt="star" />
    </button>
  );
};

export default Star;
