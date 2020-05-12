import React from 'react';
import Board from './Board';
import Star from './Star';
import Round from './Round';

class Minigame extends React.Component {

  handleChange(event, minigame) {
    this.props.reorderGames(event.target.value, minigame);
  }

  renderRoundTracker = () => {
    if ( (this.props.index+1) % 3 ) {
      return (
        <Round key={this.props.index+1} round={this.props.index+1} />
      );
    }
  }

  render() {
    const stars = [1,2,3,4,5,6];
    return (
      <>
        <div className="Minigame">
          <div className="content">
            <div className="roundNumber">
              <input type="number" name="roundNumber" id={`${this.props.index}round`} min="1" max="3" onChange={(event) => this.handleChange(event, this.props.minigame)} />
            </div>
            <h2 className="title">{this.props.minigame.name}</h2>
            <Board index={this.props.index} board={this.props.minigame.board} name={this.props.minigame.name} />
            <div className="stars-row">
              {stars.map(star => <Star
                key={star}
                index={this.props.index}
              />)}
            </div>
          </div>
        </div>
        {this.renderRoundTracker()}
      </>
    );
  }
}

export default Minigame;
