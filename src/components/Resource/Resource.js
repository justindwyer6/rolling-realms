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

const Resource = ({
  name,
  isCost = false,
  secondName = "",
  classes = "",
}) => {
  const getResource = (resourceName) => {
    if (resourceName === pumpkin.name) {
      return pumpkin;
    }
    if (resourceName === heart.name) {
      return heart;
    }
    if (resourceName === coin.name) {
      return coin;
    }
    if (resourceName === star.name) {
      return star;
    }
    throw Error(`Hmmm... ${resourceName} is not a valid resource.`);
  };

  const resource = getResource(name);
  const secondResource = secondName ? getResource(secondName) : null;

  return (
    <div className={`resource ${isCost ? "cost" : ""} ${classes}`}>
      {isCost ? <span>–</span> : null}
      <img
        src={resource.src}
        alt={resource.name}
        className={
          secondName ? "resourceImage firstResource" : "resourceImage"
        }
      />
      {secondName ? (
        <img
          src={secondResource.src}
          alt={secondResource.name}
          className="resourceImage secondResource"
        />
      ) : null}
    </div>
  );
};

export default Resource;
