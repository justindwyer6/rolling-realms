import React from "react";
import getResource from "utilities/getResource";
import "./Resource.scss";

const Resource = ({
  name,
  isCost = false,
  secondName = "",
  classes = "",
}) => {
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
