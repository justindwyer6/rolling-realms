import React from "react";
import Die from "./Die";
import WineGlass from "./WineGlass";
import "./Viticulture.scss";
import { times } from "lodash";

class Viticulture extends React.Component {
  rewards = ["heart", "heart", "coin", "coin", "pumpkin", "pumpkin"];

  renderDie(i) {
    return (
      <Die
        key={`${i+1}die`}
        i={i+1}
        dieClasses="die grapeDie"
      />
    );
  }

  renderRewards(i) {
    return (
      <img className="reward" key={this.rewards[i]+i} src={`/assets/Links/${this.rewards[i]}.png`} alt={this.rewards[i]}/>
    );
  }

  renderWineOrders(i) {
    return(
      <div className="wineOrder" key={i}>
        <WineGlass wineGlassClasses="wineGlass" i={i} />
        <div className="stars">
          <img src="/assets/Links/star_victory.png" alt="star"/>
          <img src="/assets/Links/star_victory.png" alt="star"/>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <p>
          Either gain a grape (circle it) OR use the sum of 1 die and at least 1 gained grape (cross it off) to fill a wine order.
        </p>
        <div className="viticultureC">
          {times(6, (i) => this.renderDie(i))}
          {times(6, (i) => this.renderRewards(i))}
          {times(3, (i) => this.renderWineOrders(i))}
        </div>
      </>
    );
  }
}

export default Viticulture
