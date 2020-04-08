import React from 'react';
import Board from './Board';
// import Star from './Star';

class Minigame extends React.Component {
  renderStars = (star, index) => {
    function updateStar() {
      this.src = "/assets/Links/star_victory.png"
      console.log(this);
    }
    return (
      <img key={this.props.index + index} src='/assets/Links/outline_star.png' alt="star" onClick={updateStar}></img>
    );
  }
  render() {
    const stars = [1,2,3,4,5,6]
    console.log(this.props.index)
    return (
      <div className="Minigame">
        <div className="content">
          <div className="round"></div>
          <h2 className="title">{this.props.minigame.name}</h2>
          <p>{this.props.minigame.rulesA}</p>
          <Board board={this.props.minigame.game} name={this.props.minigame.name} />
          <p>{this.props.minigame.rulesB}</p>
          <div className="image-row stars-row">
            {stars.map((star, index) => this.renderStars(star, index))}
            {/* <Star /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Minigame;
