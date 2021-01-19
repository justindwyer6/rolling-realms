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

const Board = ({ minigameName, updateMinigame }) => {
  if (minigameName === "Between Two Castles") {
    return <BetweenTwoCastles updateMinigame={updateMinigame} />;
  }
  if (minigameName === "Between Two Cities") {
    return <BetweenTwoCities updateMinigame={updateMinigame} />;
  }
  if (minigameName === "Charterstone") {
    return <Charterstone updateMinigame={updateMinigame} />;
  }
  if (minigameName === "Euphoria") {
    return <Euphoria updateMinigame={updateMinigame} />;
  }
  if (minigameName === "My Little Scythe") {
    return <Scythe updateMinigame={updateMinigame} />;
  }
  if (minigameName === "Scythe") {
    return <Scythe updateMinigame={updateMinigame} />;
  }
  if (minigameName === "Tapestry") {
    return <Tapestry updateMinigame={updateMinigame} />;
  }
  if (minigameName === "Viticulture") {
    return <Viticulture updateMinigame={updateMinigame} />;
  }
  if (minigameName === "Wingspan") {
    return <Wingspan updateMinigame={updateMinigame} />;
  }
  throw Error(`Hmmm... ${minigameName} is not a valid minigame.`);
};

export default Board;
