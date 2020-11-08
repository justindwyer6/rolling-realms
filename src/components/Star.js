import React from 'react';

class Star extends React.Component {
  state = {
    src: "/assets/Links/outline_star.png"
  };

  updateStar = () => {
    this.state.src === "/assets/Links/outline_star.png"
      ? this.setState({src: "/assets/Links/star_victory.png"})
      : this.setState({src: "/assets/Links/outline_star.png"});
  }

  render() {
    return (
      <button className="starButton" onClick={this.updateStar}>
        <img className="star" src={this.state.src} alt="star" />
      </button>
    );
  }
}

export default Star;
