import React from "react";
import "./Viticulture.scss";
import { times } from "lodash";

const rewards = ["heart", "heart", "coin", "coin", "pumpkin", "pumpkin"];
class Viticulture extends React.Component {

  renderDie(i) {
    return (
      <img className="die" key={`${i+1}die`} src={`/assets/Links/dice-six-faces-${i+1}.png`} alt={`${i+1}die`}/>
    );
  }

  renderRewards(i) {
    return (
      <img className="reward" key={rewards[i]} src={`/assets/Links/${rewards[i]}.png`} alt={rewards[i]}/>
    );
  }

  renderWineOrders(i) {
    return(
      <div className="wineOrder" key={i}>
        <div className="wineGlass">11</div>
        <div className="stars">
          <img src="/assets/Links/star_victory.png" alt="star"/>
          <img src="/assets/Links/star_victory.png" alt="star"/>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="grapes">
        {times(6, (i) => this.renderDie(i))}
        {times(6, (i) => this.renderRewards(i))}
        {times(3, (i) => this.renderWineOrders(i))}
      </div>
    );
  }
}

export default Viticulture
