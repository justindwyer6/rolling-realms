import React from 'react';
import Board from './Board';
import Star from './Star';

class Minigame extends React.Component {
  render() {
    const stars = [1,2,3,4,5,6]
    return (
      <div className="Minigame">
        <div className="content">
          <div className="round"></div>
          <h2 className="title">{this.props.minigame.name}</h2>
          <p>{this.props.minigame.rulesA}</p>
          <Board board={this.props.minigame.board} name={this.props.minigame.name} />
          <p>{this.props.minigame.rulesB}</p>
          <div className="image-row stars-row">
            {stars.map((star) => <Star key={star} index={this.props.index} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Minigame;
