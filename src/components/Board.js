import React from 'react';
import BetweenTwoCastles from './BetweenTwoCastles';
import BetweenTwoCities from './BetweenTwoCities';
import Charterstone from './Charterstone';

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
      }
    }
  }
}

export default Board;
