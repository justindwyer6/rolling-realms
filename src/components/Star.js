import React from 'react';

class Star extends React.Component {
  render() {
    function updateStar() {
      this.src = "/assets/Links/star_victory.png"
      console.log(this);
    }
    console.log(this.props)
    return (
      <img src='/assets/Links/outline_star.png' alt="star" onClick={updateStar}></img>
    );
  }
}

export default Star;
