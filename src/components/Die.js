import React from 'react';

class Die extends React.Component {
  state = {
    dieClasses: this.props.dieClasses
  };

  updateDefaultDie() {
    let dieClasses = this.state.dieClasses;
    dieClasses.includes("usedDie")
      ? dieClasses = this.props.dieClasses
      : dieClasses += " usedDie";
    this.setState({ dieClasses });
  }

  updateGrapeDie() {
    let dieClasses = this.state.dieClasses;
    dieClasses.includes("usedDie")
      ? dieClasses = this.props.dieClasses
      : dieClasses.includes("gainedGrape")
        ? dieClasses += " usedDie"
        : dieClasses += " gainedGrape";
    this.setState({ dieClasses });
  }

  updateDie = () => {
    this.state.dieClasses.includes("grapeDie")
      ? this.updateGrapeDie()
      : this.updateDefaultDie();
  }

  render() {
    return (
      <img
        className={this.state.dieClasses}
        key={`${this.props.i}die`}
        src={`/assets/Links/dice-six-faces-${this.props.i}.png`}
        alt={`${this.props.i}die`}
        onClick={this.updateDie}
      />
    );
  }
}

export default Die;
