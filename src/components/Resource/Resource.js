import React, { useState } from "react";
import "./Resource.scss";
import heartSrc from "../../images/heart.png";
import pumpkinSrc from "../../images/pumpkin.png";
import coinSrc from "../../images/coin.png";
import starSrc from "../../images/star-filled.png";

const heart = {
  src: heartSrc,
  name: "heart",
};

const pumpkin = {
  src: pumpkinSrc,
  name: "pumpkin",
};

const coin = {
  src: coinSrc,
  name: "coin",
};

const star = {
  src: starSrc,
  name: "star",
};

const Resource = ({ resource }) => {
  const getResourceAsset = (thisResource) => {
    if (thisResource === "pumpkin") {
      return pumpkin;
    }
    if (thisResource === "heart") {
      return heart;
    }
    if (thisResource === "coin") {
      return coin;
    }
    throw Error(`Hmmm... ${thisResource} is not a valid resource.`);
  };

  return (
    <img
      className={`resource ${resourceState}`}
      src={getResourceAsset(resource)}
      alt={resource}
    />
  );
};

export default Resource;
