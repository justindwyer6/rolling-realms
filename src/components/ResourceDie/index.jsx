import React from "react";
import Die from "components/Die";
import Resource from "components/Resource";
import "./ResourceDie.scss";

const ResourceDie = ({
  dieType = "standard",
  dieFace,
  classes,
  resourceName,
  resourceCost = null,
}) => {
  return (
    <div
      className={`ResourceDie ${dieType}Die ${
        resourceCost ? "hasCost" : ""
      } ${classes || ""}`}
    >
      {resourceCost ? <Resource name={resourceCost} isCost /> : null}
      <Die dieType={dieType} dieFace={dieFace} />
      <Resource name={resourceName} />
    </div>
  );
};

export default ResourceDie;
