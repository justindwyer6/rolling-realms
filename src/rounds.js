import React from "react";
import BetweenTwoCastles from "./components/BetweenTwoCastles/BetweenTwoCastles";
import BetweenTwoCities from "./components/BetweenTwoCities/BetweenTwoCities";
import Charterstone from "./components/Charterstone/Charterstone";
import Euphoria from "./components/Euphoria/Euphoria";
import MyLittleScythe from "./components/MyLittleScythe/MyLittleScythe";
import Scythe from "./components/Scythe/Scythe";
import Tapestry from "./components/Tapestry/Tapestry";
import Viticulture from "./components/Viticulture/Viticulture";
import Wingspan from "./components/Wingspan/Wingspan";

const rounds = {
  "1a": <Scythe />,
  "1b": <BetweenTwoCities />,
  "1c": <Charterstone />,
  "2a": <BetweenTwoCastles />,
  "2b": <Viticulture />,
  "2c": <Euphoria />,
  "3a": <MyLittleScythe />,
  "3b": <Tapestry />,
  "3c": <Wingspan />,
};

export default rounds;
