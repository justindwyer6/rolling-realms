import React, { useState } from "react";
import Die from "../Die/Die";

const ResourceDie = ({ dieType, initialDieState, dieFace, classes }) => {
  return (
    <Die
      dieType={dieType}
      initialDieState={initialDieState}
      dieFace={dieFace}
      classes={classes}
     />
    {/* <Resource /> */}
  )
}

export default ResourceDie;
