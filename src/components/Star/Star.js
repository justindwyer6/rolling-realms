import React, { useState } from "react";

const Star = () => {
  const [starSource, setStarSource] = useState(
    "/images/star-outline.png",
  );

  const updateStar = () => {
    starSource === "/images/star-outline.png"
      ? setStarSource({ src: "/images/star.png" })
      : setStarSource({ src: "/images/star-outline.png" });
  };

  return (
    <button className="starButton" onClick={updateStar} type="button">
      <img className="star" src={starSource} alt="star" />
    </button>
  );
};

export default Star;
