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

class Board extends React.Component {
  render() {
    let game;
    if (this.props.name === "Between Two Castles") {
      game = <BetweenTwoCastles />;
    } else if (this.props.name === "Between Two Cities") {
      game = <BetweenTwoCities />;
    } else if (this.props.name === "Charterstone") {
      game = <Charterstone />;
    } else if (this.props.name === "Euphoria") {
      game = <Euphoria />;
    } else if (this.props.name === "My Little Scythe") {
      game = <Scythe />;
    } else if (this.props.name === "Scythe") {
      game = <Scythe />;
    } else if (this.props.name === "Tapestry") {
      game = <Tapestry />;
    } else if (this.props.name === "Viticulture") {
      game = <Viticulture />;
    } else if (this.props.name === "Wingspan") {
      game = <Wingspan />;
    }
    return game;
  }
}

export default Board;
