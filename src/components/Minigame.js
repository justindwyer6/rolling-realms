import React from 'react';

class Minigame extends React.Component {
  render() {
    return (
      <div className="Minigame">
        <div className="content">
          <div className="round"></div>
          <h2 className="title">{this.props.minigame.name}</h2>
          <p>{this.props.minigame.rulesA}</p>
          {/* <Game /> */}
          <img src={this.props.minigame.game} alt="game"/>
          <p>{this.props.minigame.rulesB}</p>
          <div className="stars">
            <img src='/assets/Links/outline_star.png' alt="star"></img>
            <img src='/assets/Links/outline_star.png' alt="star"></img>
            <img src='/assets/Links/outline_star.png' alt="star"></img>
            <img src='/assets/Links/outline_star.png' alt="star"></img>
            <img src='/assets/Links/outline_star.png' alt="star"></img>
            <img src='/assets/Links/outline_star.png' alt="star"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Minigame;
