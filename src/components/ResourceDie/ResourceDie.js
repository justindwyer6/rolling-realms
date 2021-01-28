import React from "react";
import Die from "../Die/Die";
import Resource from "../Resource/Resource";

const ResourceDie = ({
  dieType,
  initialDieState,
  dieFace,
  classes,
}) => {
  return (
    <>
      <Die
        dieType={dieType}
        initialDieState={initialDieState}
        dieFace={dieFace}
        classes={classes}
      />
      <Resource />
    </>
  );
};

export default ResourceDie;
