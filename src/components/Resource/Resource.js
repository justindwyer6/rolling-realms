import React from "react";
import "./Resource.scss";
import heartSrc from "../../images/heart.png";
import pumpkinSrc from "../../images/pumpkin.png";
import coinSrc from "../../images/coin.png";
import starSrc from "../../images/star-filled.png";

const heart = {
  name: "heart",
  src: heartSrc,
};

const pumpkin = {
  name: "pumpkin",
  src: pumpkinSrc,
};

const coin = {
  name: "coin",
  src: coinSrc,
};

const star = {
  name: "star",
  src: starSrc,
};

const Resource = ({ name, isMinusResource = false }) => {
  let resource;
  if (name === pumpkin.name) {
    resource = pumpkin;
  } else if (name === heart.name) {
    resource = heart;
  } else if (name === coin.name) {
    resource = coin;
  } else if (name === star.name) {
    resource = star;
  } else {
    throw Error(`Hmmm... ${name} is not a valid resource.`);
  }

  return (
    <div
      className={`resource ${resource.name} ${
        isMinusResource ? "minus" : ""
      }`}
    >
      {isMinusResource ? <span>-</span> : null}
      <img src={resource.src} alt={resource.name} />
    </div>
  );
};

export default Resource;
