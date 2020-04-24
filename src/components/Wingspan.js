import React from "react";
import "./Wingspan.scss";
import { times } from "lodash";

class Wingspan extends React.Component {

  rewards = ["pumpkin", "coin", "heart", "pumpkin"];

  renderBirds(i) {
    return (
      <div key={"bird"+i} className="bird">
        <p>
          {7+(i*4)+(i?1:0)}
        </p>
        <div class="birdCells">
          {times(3, (j) => <input key={j} type="text" className="cell" /> )}
          {times(2, (j) => <img key={j} src={`/assets/Links/${this.rewards[j+i]}.png`} alt={this.rewards[j+i]} className="reward" /> )}
        </div>
      </div>
    );
  }
  render() {
    return (
      <>
        <p>Use 1 die in a square on any bird, left to right. The 1st and 2nd squares on each bird provide a bonus.</p>
        <div className="birds">
          {times(3, (i) => this.renderBirds(i))}
        </div>
        <p>Score 2 star per complete bird whose sum = wingspan.</p>
      </>
    );
  }
}

export default Wingspan
