import React from "react";
import Die from "../Die/Die";
import Resource from "../Resource/Resource";
import "./ResourceDie.scss";

const ResourceDie = ({
  dieType,
  dieFace,
  classes,
  resourceName,
  isMinusResource,
}) => {
  console.log("hi ");
  return (
    <div className="ResourceDie">
      <Die dieType={dieType} dieFace={dieFace} classes={classes} />
      <Resource
        name={resourceName}
        isMinusResource={isMinusResource}
      />
    </div>
  );
};

export default ResourceDie;
