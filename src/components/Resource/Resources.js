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

const Resource = ({ resources, isCost = false, classes = "" }) => {
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

  const resourceObjects = resources.map((resource) =>
    getResource(resource),
  );

  return (
    <div className={`resource ${isCost ? "cost" : ""} ${classes}`}>
      {isCost ? <span>–</span> : null}
      {resourceObjects.map((resource, i) => (
        <img
          src={resource.src}
          alt={resource.name}
          className={`resource${i.toString()}`}
        />
      ))}
    </div>
  );
};

export default Resource;
