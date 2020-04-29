import React from 'react';
import "./Euphoria.scss";

class Euphoria extends React.Component {
  render() {
    return (
      <div className="euphoriaC">
        {/* <img src="/assets/Links/coin.png" alt="" className="med-icon"/> */}
        <div className="table">
          <img src="/assets/Links/dice-six-faces-1.png" alt="die" className="die"/>
          <img src="/assets/Links/dice-six-faces-2.png" alt="die" className="die"/>
          <img src="/assets/Links/dice-six-faces-3.png" alt="die" className="die"/>
          <img src="/assets/Links/dice-six-faces-4.png" alt="die" className="die"/>
          <img src="/assets/Links/dice-six-faces-5.png" alt="die" className="die"/>
          <img src="/assets/Links/dice-six-faces-6.png" alt="die" className="die"/>
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
        {/* <img src="/assets/Links/pumpkin.png" alt="" className="med-icon"/> */}
        <div className="table">
          <img src="/assets/Links/dice-six-faces-1.png" alt="die" className="die"/>
          <img src="/assets/Links/dice-six-faces-2.png" alt="die" className="die"/>
          <img src="/assets/Links/dice-six-faces-3.png" alt="die" className="die"/>
          <img src="/assets/Links/dice-six-faces-4.png" alt="die" className="die"/>
          <img src="/assets/Links/dice-six-faces-5.png" alt="die" className="die"/>
          <img src="/assets/Links/dice-six-faces-6.png" alt="die" className="die"/>
        </div>
      </div>
    );
  }
}

export default Euphoria;
