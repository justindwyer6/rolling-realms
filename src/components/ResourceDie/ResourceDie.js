import React from "react";
import Die from "../Die/Die";
import Resource from "../Resource/Resource";
import "./ResourceDie.scss";

const ResourceDie = ({
  dieType,
  dieFace,
  classes,
  resourceName,
  resourceCost = null,
}) => {
  return (
    <div className={`ResourceDie ${resourceCost ? "hasCost" : ""}`}>
      {resourceCost ? <Resource name={resourceCost} isCost /> : null}
      <Die dieType={dieType} dieFace={dieFace} classes={classes} />
      <Resource name={resourceName} />
    </div>
  );
};

export default ResourceDie;
