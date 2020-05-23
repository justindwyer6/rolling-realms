import React from "react";
import "./Wingspan.scss";
import { times } from "lodash";

class Wingspan extends React.Component {

  rewards = ["pumpkin", "coin", "star_victory", "coin", "heart", "star_victory", "heart", "pumpkin", "star_victory"];

  renderBirds(i) {
    return (
      <div key={"bird"+i} className="bird">
        <p>
          {7+(i*4)+(i?1:0)}
        </p>
        <div className="birdCells">
          {times(3, (j) => (
            <div>
              <input key={j} type="number" className="cell" />
            </div>
          ))}
          {times(3, (j) => <img key={j} src={`/assets/Links/${this.rewards[j+i+(2*i)]}.png`} alt={this.rewards[j+i]} className="reward" /> )}
        </div>
      </div>
    );
  }
  render() {
    return (
      <>
        <p>Fill a square on any bird (left to right), then gain the bonus below that square</p>
        <div className="birds">
          {times(3, (i) => this.renderBirds(i))}
        </div>
        <p className="margin20">Score 1 star per complete bird whose sum = wingspan.</p>
      </>
    );
  }
}

export default Wingspan
