import React from 'react';
import Reward from '../Reward';
import Rules from '../Rules';
import './Round.scss';
import { times } from "lodash";

class Round extends React.Component {
  state = {
    asideClasses: "",
    die1: 1,
    die2: 6
  };

  rollDice = () => {
    times(6, (i) => {
      let die1 = i;
      let die2 = ( 7 - i );
      setTimeout(() => { this.setState({ die1, die2 }) }, (50 + i*15));
    })
    let die1 = Math.ceil(Math.random()*6);
    let die2 = Math.ceil(Math.random()*6);
    setTimeout(() => { this.setState({ die1, die2 }) }, 350);
  }

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
    return <Reward key={i+reward} i={i} reward={reward} rewardClasses="reward" />
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
        <button className="standardButton" onClick={this.rollDice} >
          <img
            className="rolledDie"
            src={`/images/d6-${this.state.die1}.png`}
            alt={`Rolled Die`}
          />
          <img
            className="rolledDie"
            src={`/images/d6-${this.state.die2}.png`}
            alt={`Rolled Die`}
          />
        </button>
        <div className="roundTotal">
          <p>
            ROUND {this.props.round + 1}:
          </p>
          <input type="number" name="roundTotal" />
          <img src="/images/star.png" alt="star"/>
        </div>
        <button className="ruleButton" onClick={this.showRules}>
          <h4>
            Show Rules
          </h4>
          <aside className={this.state.asideClasses}>
            <Rules />
          </aside>
        </button>
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
