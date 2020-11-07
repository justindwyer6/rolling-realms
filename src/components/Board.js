import React from 'react';
import BetweenTwoCastles from './BetweenTwoCastles';
import BetweenTwoCities from './BetweenTwoCities';
import Charterstone from './Charterstone';
import Euphoria from './Euphoria';
import MyLittleScythe from './MyLittleScythe';
import Scythe from './Scythe';
import Tapestry from './Tapestry';
import Viticulture from './Viticulture';
import Wingspan from './Wingspan';

const Board = (props) => {
  if (props.name === "Between Two Castles") {
    return <BetweenTwoCastles />
  } else if (props.name === "Between Two Cities") {
    return <BetweenTwoCities />
  } else if (props.name === "Charterstone") {
    return <Charterstone />
  } else if (props.name === "Euphoria") {
    return <Euphoria />
  } else if (props.name === "My Little Scythe") {
    return <MyLittleScythe />
  } else if (props.name === "Scythe") {
    return <Scythe />
  } else if (props.name === "Tapestry") {
    return <Tapestry />
  } else if (props.name === "Viticulture") {
    return <Viticulture />
  } else if (props.name === "Wingspan") {
    return <Wingspan />
  }
}

export default Board;
