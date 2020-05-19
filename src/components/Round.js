import React from 'react';
import Reward from './Reward';
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
          <div className="rules">
            <p>Pay:</p>
            <p>
              • 2<img className="inline-image" src="/assets/Links/pumpkin.png" alt="pumpkin"/>: adjust a die +/- 1
            </p>
            <p>
              • 3<img className="inline-image" src="/assets/Links/pumpkin.png" alt="pumpkin"/>: adjust a die +/-1; you may use it in a realm you’ve already used this turn
            </p>
            <p>
              • 2<img className="inline-image" src="/assets/Links/heart.png" alt="heart"/>: reuse a die if the non-adjusted dice show a pair
            </p>
            <p>
              • 3<img className="inline-image" src="/assets/Links/heart.png" alt="heart"/>: reuse a die
            </p>
            <p>
              • 2<img className="inline-image" src="/assets/Links/coin.png" alt="coin"/>: reuse a die if the non-adjusted dice sum is 7
            </p>
            <p>
              • X<img className="inline-image" src="/assets/Links/coin.png" alt="coin"/>: gain a die of value X (1-6)
            </p>
            <hr/>
            <p>
              • Reused dice and extra #s can’t be used in the same realm(s) as other dice in the same turn
            </p>
            <p>
              • Reuse dice as they were originally rolled
            </p>
            <p>
              • Earned-but-unused resources are worth 0.1 stars each
            </p>
            <p>
              • Resources do not carry over to the next round
            </p>
            <p>
              • <a href="https://stonemaiergames.com/games/rolling-realms/" target="_blank" rel="noopener noreferrer">Details, Print, and FAQs</a>
            </p>
          </div>
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
