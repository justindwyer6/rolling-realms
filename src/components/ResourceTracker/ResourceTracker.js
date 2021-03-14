import React, { useState } from "react";
import useConfirmation from "../../hooks/useConfirmation";
import "./ResourceTracker.scss";
import pumpkin from "../../images/pumpkin.png";
import heart from "../../images/heart.png";
import coin from "../../images/coin.png";

const ResourceTracker = ({ resourceType }) => {
  const [resourcesEarned, setResourcesEarned] = useState(0);
  const [resourcesUsed, setResourcesUsed] = useState(0);
  const [
    confirmationRequested,
    setConfirmationRequested,
  ] = useConfirmation();

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

  const handleReset = () => {
    if (!confirmationRequested) {
      setConfirmationRequested(true);
    } else {
      setResourcesEarned(0);
      setResourcesUsed(0);
      setConfirmationRequested(false);
    }
  };

  return (
    <div className="ResourceTracker">
      <button type="button" className="use" onClick={useResource}>
        –
      </button>
      <div className="resourceCount">
        {resourcesEarned - resourcesUsed}
      </div>
      <img src={resourceSrc} alt={resourceType} />
      <button type="button" className="earn" onClick={earnResource}>
        +
      </button>
      <div className="earned">
        Earned: {resourcesEarned}{" "}
        <button type="button" className="reset" onClick={handleReset}>
          reset{confirmationRequested ? "?" : ""}
        </button>
      </div>
    </div>
  );
};

export default ResourceTracker;
