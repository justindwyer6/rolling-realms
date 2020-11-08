import React from 'react';

class Hexagon extends React.Component {
  state = { hexagonClasses: this.props.hexagonClasses };

  updateHexagon = () => {
    let hexagonClasses = this.state.hexagonClasses;
    hexagonClasses.includes("usedHexagon")
      ? hexagonClasses = this.props.hexagonClasses
      : hexagonClasses += " usedHexagon";
    this.setState({ hexagonClasses });
  }

  render() {
    return (
      <button className={this.state.hexagonClasses} onClick={this.updateHexagon}>
        <img src={`/assets/Links/dice-six-faces-${this.props.dieFace}.png`} alt={`${this.props.dieFace}die`} className="die"/>
      </button>
    );
  }
}

export default Hexagon;
