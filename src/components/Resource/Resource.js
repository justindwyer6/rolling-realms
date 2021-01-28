import React, { useState } from "react";
import pumpkin from "../../images/pumpkin.png";
import heart from "../../images/heart.png";
import coin from "../../images/coin.png";
import "./Resource.scss";

const Resource = ({ round, resource, i }) => {
  const [resourceState, setResourceState] = useState("available");

  const updateResource = () => {
    if (resourceState === "available") {
      setResourceState("gained");
    } else if (resourceState === "gained") {
      setResourceState("used");
    } else {
      setResourceState("available");
    }
  };

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
    <button
      type="button"
      aria-label={`Round ${round}: ${resource} ${i}`}
      title={`Round ${round}: ${resource} ${i}`}
      onClick={updateResource}
    >
      <img
        className={`resource ${resourceState}`}
        src={getResourceAsset(resource)}
        alt={resource}
      />
    </button>
  );
};

export default Resource;
