import React from 'react';
import BetweenTwoCastles from './BetweenTwoCastles';
import BetweenTwoCities from './BetweenTwoCities';
import Charterstone from './Charterstone';
import Euphoria from './Euphoria';
import MyLittleScythe from './MyLittleScythe';
import Scythe from './Scythe';
import Tapestry from './Tapestry';

class Board extends React.Component {
  render() {
    if (this.props.board) {
      return <img src={this.props.board} alt="game"/>
    } else {
      if (this.props.name === "Between Two Castles") {
        return <BetweenTwoCastles />
      } else if (this.props.name === "Between Two Cities") {
        return <BetweenTwoCities />
      } else if (this.props.name === "Charterstone") {
        return <Charterstone />
      } else if (this.props.name === "Euphoria") {
        return <Euphoria />
      } else if (this.props.name === "My Little Scythe") {
        return <MyLittleScythe />
      } else if (this.props.name === "Scythe") {
        return <Scythe />
      } else if (this.props.name === "Tapestry") {
        return <Tapestry />
      }
    }
  }
}

export default Board;
