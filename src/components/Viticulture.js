import React from "react";
import "./Viticulture.scss";
import { times } from "lodash";

class Viticulture extends React.Component {
  render() {
    const renderDie = i => (
      <img className="die" key={`${i+1}die`} src={`/assets/Links/dice-six-faces-${i+1}.png`} alt={`${i+1}die`}/>
    );

    const rewards = ["heart", "heart", "coin", "coin", "pumpkin", "pumpkin"];
    const renderRewards = i => (
      <img className="reward" key={rewards[i]} src={`/assets/Links/${rewards[i]}.png`} alt={rewards[i]}/>
    );

    const renderWineOrders = i => (
      <div className="wineOrder" key={i}>
        <div className="wineGlass">11</div>
        <div className="stars">
          <img src="/assets/Links/star_victory.png" alt="star"/>
          <img src="/assets/Links/star_victory.png" alt="star"/>
        </div>
      </div>
    )

    return (
      <div className="grapes">
        {times(6, (i) => renderDie(i))}
        {times(6, (i) => renderRewards(i))}
        {times(3, (i) => renderWineOrders(i))}
      </div>
    );
  }
}

export default Viticulture
