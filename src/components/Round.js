import React from 'react';
import Reward from './Reward';
import Rules from './Rules';
import './Round.scss';
import { times } from "lodash";

class Round extends React.Component {
  state = {
    asideClasses: ""
  };

  showRules = () => {
    let asideClasses = this.state.asideClasses;
    asideClasses.includes("show") ? asideClasses = "" : asideClasses += " show";
    this.setState({ asideClasses })
  }

  renderInputs = (i) => {
    return (
      <div key={i}>
        <input className="input1" type="number" name="die1" />
        <input className="input2" type="number" name="die2" />
      </div>
    );
  }

  renderRewards = (i, reward) => {
    return <Reward key={i} i={i} reward={reward} rewardClasses="reward" />
  }

  render() {
    return (
      <div className="roundC">
        <div className="turnsC">
          <p className="sideways">TURNS</p>
          <div className="turns">
            {times(9, (i) => this.renderInputs(i))}
          </div>
        </div>
        <aside className={this.state.asideClasses} onClick={this.showRules}>
          <h4>
            Show Rules
          </h4>
          <Rules />
        </aside>
        <div className="roundTotal">
          <p>
            ROUND {this.props.round + 1}:
          </p>
          <input type="number" name="roundTotal" />
          <img src="/assets/Links/star_victory.png" alt="star"/>
        </div>
        <div className="rewards">
          {times(12, (i) => this.renderRewards(i, "pumpkin"))}
        </div>
        <div className="rewards">
          {times(12, (i) => this.renderRewards(i, "heart"))}
        </div>
        <div className="rewards">
          {times(12, (i) => this.renderRewards(i, "coin"))}
        </div>
      </div>
    );
  }
}

export default Round;
