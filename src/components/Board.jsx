import React from "react";
import BetweenTwoCastles from "components/BetweenTwoCastles";
import BetweenTwoCities from "components/BetweenTwoCities";
import Charterstone from "components/Charterstone";
import Euphoria from "components/Euphoria";
import MyLittleScythe from "components/MyLittleScythe";
import Scythe from "components/Scythe";
import Tapestry from "components/Tapestry";
import Viticulture from "components/Viticulture";
import Wingspan from "components/Wingspan";

const Board = ({ minigameName }) => {
  if (minigameName === "Between Two Castles") {
    return <BetweenTwoCastles />;
  }
  if (minigameName === "Between Two Cities") {
    return <BetweenTwoCities />;
  }
  if (minigameName === "Charterstone") {
    return <Charterstone />;
  }
  if (minigameName === "Euphoria") {
    return <Euphoria />;
  }
  if (minigameName === "My Little Scythe") {
    return <MyLittleScythe />;
  }
  if (minigameName === "Scythe") {
    return <Scythe />;
  }
  if (minigameName === "Tapestry") {
    return <Tapestry />;
  }
  if (minigameName === "Viticulture") {
    return <Viticulture />;
  }
  if (minigameName === "Wingspan") {
    return <Wingspan />;
  }
  throw Error(`Hmmm... ${minigameName} is not a valid minigame.`);
};

export default Board;
