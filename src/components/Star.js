import React from 'react';

class Star extends React.Component {
  state = {
    src: "/images/star-outline.png"
  };

  updateStar = () => {
    this.state.src === "/images/star-outline.png"
      ? this.setState({src: "/images/star.png"})
      : this.setState({src: "/images/star-outline.png"});
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
