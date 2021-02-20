import React from "react";
import "./Hexagon.scss";
// import Die from "../Die/Die";

const Hexagon = ({ innerComponent }) => {
  return <div className="Hexagon">{innerComponent}</div>;
};

export default Hexagon;
