import React, { useState } from "react";
import getResource from "utilities/getResource";
import useConfirmation from "hooks/useConfirmation";
import "./ResourceTracker.scss";

const ResourceTracker = ({ resourceType }) => {
  const [resourcesEarned, setResourcesEarned] = useState(0);
  const [resourcesUsed, setResourcesUsed] = useState(0);
  const [
    resetConfirmationRequested,
    setResetConfirmationRequested,
  ] = useConfirmation();

  const resource = getResource(resourceType);

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
    if (!resetConfirmationRequested) {
      setResetConfirmationRequested(true);
    } else {
      setResourcesEarned(0);
      setResourcesUsed(0);
      setResetConfirmationRequested(false);
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
      <img src={resource.src} alt={resource.name} />
      <button type="button" className="earn" onClick={earnResource}>
        +
      </button>
      <div className="earned">
        Earned: {resourcesEarned}{" "}
        <button type="button" className="reset" onClick={handleReset}>
          reset{resetConfirmationRequested ? "?" : ""}
        </button>
      </div>
    </div>
  );
};

export default ResourceTracker;
