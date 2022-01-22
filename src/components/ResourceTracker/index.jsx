import React from "react";
import getResource from "utilities/getResource";
import useResource from "hooks/useResource";
import useBooleanTimeout from "hooks/useBooleanTimeout";
import "./ResourceTracker.scss";

const ResourceTracker = ({ round, resourceType }) => {
  const {
    resourcesEarned,
    resourcesSpent,
    earnResource,
    spendResource,
    resetResource,
  } = useResource(round, resourceType);
  const [
    resetConfirmationRequested,
    setResetConfirmationRequested,
  ] = useBooleanTimeout(4000);

  const resource = getResource(resourceType);

  const handleReset = () => {
    if (!resetConfirmationRequested) {
      setResetConfirmationRequested(true);
    } else {
      resetResource();
      setResetConfirmationRequested(false);
    }
  };

  return (
    <div className="ResourceTracker">
      <button type="button" className="use" onClick={spendResource}>
        –
      </button>
      <div className="resourceCount">
        {resourcesEarned - resourcesSpent}
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
