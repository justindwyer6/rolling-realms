import React, { useState } from "react";
import unearnedStar from "../../images/star-outline.png";
import earnedStar from "../../images/star.png";

const Star = () => {
  const [starSource, setStarSource] = useState(unearnedStar);

  const updateStar = () => {
    if (starSource === unearnedStar) {
      setStarSource({ src: earnedStar });
    } else {
      setStarSource({ src: unearnedStar });
    }
  };

  return (
    <button className="starButton" onClick={updateStar} type="button">
      <img className="star" src={starSource} alt="star" />
    </button>
  );
};

export default Star;
