import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Star.scss";
import availableStar from "images/star-outline.png";
import earnedStar from "images/star-filled.png";
import { actionCreators } from "reducers/rounds";

const Star = () => {
  const [starSource, setStarSource] = useState(availableStar);
  const dispatch = useDispatch();

  const updateStar = () => {
    if (starSource === availableStar) {
      dispatch(actionCreators.earnStar(2, 3));
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
