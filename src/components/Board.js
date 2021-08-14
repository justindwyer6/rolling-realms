import React from "react";
import BetweenTwoCastles from "./BetweenTwoCastles/BetweenTwoCastles";
import BetweenTwoCities from "./BetweenTwoCities/BetweenTwoCities";
import Charterstone from "./Charterstone/Charterstone";
import Euphoria from "./Euphoria/Euphoria";
import MyLittleScythe from "./MyLittleScythe/MyLittleScythe";
import Scythe from "./Scythe/Scythe";
import Tapestry from "./Tapestry/Tapestry";
import Viticulture from "./Viticulture/Viticulture";
import Wingspan from "./Wingspan/Wingspan";
import Pendulum from "./Pendulum/Pendulum";

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
  if (minigameName === "Pendulum") {
    return <Pendulum />;
  }
  throw Error(`Hmmm... ${minigameName} is not a valid minigame.`);
};

export default Board;
