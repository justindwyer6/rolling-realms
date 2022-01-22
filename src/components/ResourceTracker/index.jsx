import React from "react";
import getResource from "utilities/getResource";
import useResource from "hooks/useResource";
// import useBooleanTimeout from "hooks/useBooleanTimeout";
import "./ResourceTracker.scss";

const ResourceTracker = ({ resourceType, round }) => {
  const [
    resourcesEarned,
    resourcesSpent,
    earnResource,
    spendResource,
  ] = useResource(round, resourceType);
  // const [
  //   resetConfirmationRequested,
  //   setResetConfirmationRequested,
  // ] = useBooleanTimeout(4000);

  const resource = getResource(resourceType);

  // const handleReset = () => {
  //   if (!resetConfirmationRequested) {
  //     setResetConfirmationRequested(true);
  //   } else {
  //     setResourcesEarned(0);
  //     setResourcesUsed(0);
  //     setResetConfirmationRequested(false);
  //   }
  // };

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
        {/* <button type="button" className="reset" onClick={handleReset}>
          reset{resetConfirmationRequested ? "?" : ""}
        </button> */}
      </div>
    </div>
  );
};

export default ResourceTracker;
