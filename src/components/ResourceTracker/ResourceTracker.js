import React, { useState } from "react";
import "./ResourceTracker.scss";
import pumpkin from "../../images/pumpkin.png";
import heart from "../../images/heart.png";
import coin from "../../images/coin.png";

const ResourceTracker = ({ resourceType }) => {
  const [resourcesEarned, setResourcesEarned] = useState(0);
  const [resourcesUsed, setResourcesUsed] = useState(0);

  let resourceSrc;
  if (resourceType === "pumpkin") {
    resourceSrc = pumpkin;
  } else if (resourceType === "heart") {
    resourceSrc = heart;
  } else if (resourceType === "coin") {
    resourceSrc = coin;
  } else {
    resourceSrc = null;
    throw Error(`${resourceType} is not a valid type of resource.`);
  }

  const earnResource = () => {
    setResourcesEarned(resourcesEarned + 1);
  };

  const useResource = () => {
    if (resourcesEarned === 0) {
      return;
    }
    if (resourcesEarned - resourcesUsed === 0) {
      return;
    }
    setResourcesUsed(resourcesUsed + 1);
  };

  return (
    <div className="ResourceTracker">
      <button type="button" onClick={useResource}>
        –
      </button>
      <div className="resourceCount">
        {resourcesEarned - resourcesUsed}
      </div>
      <img src={resourceSrc} alt={resourceType} />
      <button type="button" onClick={earnResource}>
        +
      </button>
    </div>
  );
};

export default ResourceTracker;
