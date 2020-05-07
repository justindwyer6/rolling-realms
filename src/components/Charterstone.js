import React from 'react';
import Die from './Die';
import "./Charterstone.scss";
import { times } from "lodash";

class Charterstone extends React.Component {

  rewards = ["pumpkin", "pumpkin", "coin", "coin", "heart", "heart"]

  renderDie(i) {
    return (
      <Die
        key={`${i+1}die`}
        i={i+1}
        dieClasses="die"
      />
    );
  }

  renderRewards(i, rewards) {
    return (
      <img className="topReward" key={rewards[i]+i} src={`/assets/Links/${rewards[i]}.png`} alt={rewards[i]} />
    );
  }

  render() {
    return (
      <>
        <p>Mark either <span>a bonus</span> (note the other rolled die on the crate) or <span>all crates matching the die</span>.</p>
        <div className="charterstoneC">
          {times(6, (i) => this.renderDie(i))}
          {times(6, (i) => this.renderRewards(i, this.rewards))}
          {times(6, (i) => <img src='/assets/Links/Left_Arrow_Red.png' alt="arrow" key={i} />)}
          {times(6, (i) => (
            <div key={i}>
              <input type="number" min="1" max="6" />
              <img src='/assets/Links/Charterstone_Icon_CrateOpen.png' alt="crate" />
            </div>
          ))}
          {times(6, (i) => <img src='/assets/Links/Left_Arrow_Red.png' alt="arrow" key={i} />)}
        </div>
      </>
    );
  }
}

export default Charterstone;
