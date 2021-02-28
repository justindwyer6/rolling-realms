import React, { useState } from "react";
import "./ResourceTracker.scss";
import pumpkin from "../../images/pumpkin.png";
import heart from "../../images/heart.png";
import coin from "../../images/coin.png";

const ResourceTracker = ({ resourceType }) => {
  const [resourcesEarned, setResourcesEarned] = useState(0);
  const [resourcesUsed, setResourcesUsed] = useState(0);
  const [resetRequested, setResetRequested] = useState(false);
  const [timeoutResetRequested, setTimeoutResetRequested] = useState(
    null,
  );

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

  function confirmResetResources() {
    function resetResources() {
      if (resetRequested) {
        setResourcesEarned(0);
        setResourcesUsed(0);
        setResetRequested(false);
        setTimeoutResetRequested(clearTimeout(timeoutResetRequested));
      } else {
        setResetRequested(true);
        setTimeoutResetRequested(
          setTimeout(() => setResetRequested(false), 5000),
        );
      }
    }
    return resetResources;
  }

  const resetResourcesClosure = confirmResetResources();

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
        <button
          type="button"
          className="reset"
          onClick={resetResourcesClosure}
        >
          reset{resetRequested ? "?" : ""}
        </button>
      </div>
    </div>
  );
};

export default ResourceTracker;
