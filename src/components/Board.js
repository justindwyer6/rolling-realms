import React from "react";
import BetweenTwoCastles from "./BetweenTwoCastles/BetweenTwoCastles";
import BetweenTwoCities from "./BetweenTwoCities/BetweenTwoCities";
import Charterstone from "./Charterstone/Charterstone";
import Euphoria from "./Euphoria/Euphoria";
// import MyLittleScythe from './MyLittleScythe/MyLittleScythe';
import Scythe from "./Scythe/Scythe";
import Tapestry from "./Tapestry/Tapestry";
import Viticulture from "./Viticulture/Viticulture";
import Wingspan from "./Wingspan/Wingspan";

const Board = ([name]) => {
  if (name === "Between Two Castles") {
    return <BetweenTwoCastles />;
  }
  if (name === "Between Two Cities") {
    return <BetweenTwoCities />;
  }
  if (name === "Charterstone") {
    return <Charterstone />;
  }
  if (name === "Euphoria") {
    return <Euphoria />;
  }
  if (name === "My Little Scythe") {
    return <Scythe />;
  }
  if (name === "Scythe") {
    return <Scythe />;
  }
  if (name === "Tapestry") {
    return <Tapestry />;
  }
  if (name === "Viticulture") {
    return <Viticulture />;
  }
  if (name === "Wingspan") {
    return <Wingspan />;
  }
  throw Error("Hmmm... That's not a valid minigame.");
};

export default Board;
