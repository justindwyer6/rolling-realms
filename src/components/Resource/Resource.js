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

const Resource = ({ name, isCost = false, secondName = "" }) => {
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

  let secondResource;
  if (secondName) {
    if (secondName === pumpkin.name) {
      secondResource = pumpkin;
    } else if (secondName === heart.name) {
      secondResource = heart;
    } else if (secondName === coin.name) {
      secondResource = coin;
    } else if (secondName === star.name) {
      secondResource = star;
    } else {
      throw Error(`Hmmm... ${secondName} is not a valid resource.`);
    }
  }

  return (
    <div className={`resource ${isCost ? "cost" : ""}`}>
      {isCost ? <span>-</span> : null}
      <img
        src={resource.src}
        alt={resource.name}
        className={secondName ? "firstResource" : ""}
      />
      {secondName ? (
        <img
          src={secondResource.src}
          alt={secondResource.name}
          className="secondResource"
        />
      ) : null}
    </div>
  );
};

export default Resource;
