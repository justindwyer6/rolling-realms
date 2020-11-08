import React from 'react';

class Reward extends React.Component {
  state = {
    rewardClasses: this.props.rewardClasses
  };

  updateReward = () => {
    let rewardClasses = this.state.rewardClasses;
    rewardClasses.includes("usedReward")
      ? rewardClasses = this.props.rewardClasses
      : rewardClasses.includes("gainedReward")
        ? rewardClasses += " usedReward"
        : rewardClasses += " gainedReward";
    this.setState({ rewardClasses });
  }

  render() {
    return (
      <button onClick={this.updateReward}>
        <img
          className={this.state.rewardClasses}
          key={`${this.props.i}${this.props.reward}`}
          src={`/assets/Links/${this.props.reward}.png`}
          alt={`${this.props.reward}`}
        />
      </button>
    );
  }
}

export default Reward;
