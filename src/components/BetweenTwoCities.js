import React from 'react';
import "./BetweenTwoCities.scss";
import { times } from 'lodash';

class BetweenTwoCities extends React.Component {

  rowRewards = {
    "a2": "pumpkin",
    "b2": "coin",
    "a5": "coin",
    "b5": "heart",
    "a8": "heart",
    "b8": "pumpkin"
  };
  columnRewards = ["pumpkin", "coin", "heart"];

  renderCell(i) {
    return (
      <div  key={i} className="input">
        <input type="number" className="" min="1" max="6" />
      </div>
    );
  }

  render() {
    return (
      <>
        <p>Fill a square; same #s can’t be orthogonally adjacent. Gain a bonus when you complete a row/column</p>
        <div className="gridGuideAlign">
          <div className="betweenTwoCitiesC">
            {times(9, i => ( (i+1) % 3 )
              ? this.renderCell(i)
              : [
                this.renderCell(i),
                <div key={"rewards"+i} className="rewards">
                  <img key={"rewardA"+i} className="reward" src={`/assets/Links/${this.rowRewards["a"+i]}.png`} alt={this.rowRewards[i-4]}/>
                  <img key={"rewardB"+i} className="reward overlay" src={`/assets/Links/${this.rowRewards["b"+i]}.png`} alt={this.rowRewards[i-3]}/>
                </div>
              ]
            )}
            {times(3, i =>
              <div key={"rewards"+i} className="rewards">
                <img key={"rewardA"+i} className="reward" src={`/assets/Links/${this.columnRewards[i]}.png`} alt="reward"/>
                <img key={"rewardB"+i} className="reward overlay" src={`/assets/Links/${this.columnRewards[i]}.png`} alt="reward"/>
              </div>
            )}
          </div>
        </div>
        <p>Score stars equal to the lowest of the other 2 realms. This # cannot be higher than filled squares here.</p>
      </>
    );
  }
}

export default BetweenTwoCities;
