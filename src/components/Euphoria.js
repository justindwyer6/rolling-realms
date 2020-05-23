import React from "react";
import Die from "./Die";
import "./Euphoria.scss";
import { times } from "lodash";

class Euphoria extends React.Component {

  renderDie(i, alignment) {
    return (
      <Die key={`${i+1}die${alignment}`} i={i+1} dieClasses="die" />
    );
  }

  render() {
    return (
      <>
        <p>Either <span>mark 1 #</span> OR (if a pair is rolled) you may <span>mark both #s</span>. Then bonus is based on the sum of that area.</p>
        <div className="euphoriaC">
          <div className="table">
            {times(6, (i) => this.renderDie(i, "left"))}
          </div>
          <div className="euphoria-mid">
            <div>
              <span>1-3: </span>
              <span><img src="/assets/Links/coin.png" alt="coin" className="reward"/></span>
            </div>
            <div>
              <span>4-10: </span>
              <span><img src="/assets/Links/star_victory.png" alt="star" className="reward"/></span>
            </div>
            <div>
              <span>11+: </span>
              <span><img src="/assets/Links/heart.png" alt="heart" className="reward"/></span>
              <span>/</span>
              <span><img src="/assets/Links/pumpkin.png" alt="pumpkin" className="reward"/></span>
            </div>
          </div>
          <div className="table">
          {times(6, (i) => this.renderDie(i, "right"))}
          </div>
        </div>
      </>
    );
  }
}

export default Euphoria;
