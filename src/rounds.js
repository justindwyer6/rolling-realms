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
  "1a": { component: <Scythe />, name: "Scythe" },
  "1b": { component: <BetweenTwoCities />, name: "BetweenTwoCities" },
  "1c": { component: <Charterstone />, name: "Charterstone" },
  "2a": {
    component: <BetweenTwoCastles />,
    name: "BetweenTwoCastles",
  },
  "2b": { component: <Viticulture />, name: "Viticulture" },
  "2c": { component: <Euphoria />, name: "Euphoria" },
  "3a": { component: <MyLittleScythe />, name: "MyLittleScythe" },
  "3b": { component: <Tapestry />, name: "Tapestry" },
  "3c": { component: <Wingspan />, name: "Wingspan" },
};

export default rounds;
