import React from 'react';

class Star extends React.Component {
  state = {
    src: "/assets/Links/outline_star.png"
  }
  render() {
    function updateStar() {
      this.state.src === "/assets/Links/outline_star.png"
        ? this.setState({src: "/assets/Links/star_victory.png"})
        : this.setState({src: "/assets/Links/outline_star.png"});
    }
    return (
      <img src={this.state.src} alt="star" onClick={() => this.setState(updateStar)}></img>
    );
  }
}

export default Star;
