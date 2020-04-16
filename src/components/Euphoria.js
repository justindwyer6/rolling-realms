import React from 'react';

class Euphoria extends React.Component {
  render() {
    return (
      <div className="euphoria">
        <table className="euphoria1">
          <tbody>
            <tr>
              <td className="no-border" colspan="2"><img src="/assets/Links/Charterstone_Icon_Coin.png" alt="" className="med-icon"/></td>
            </tr>
            <tr>
              <td><img src="/assets/Links/dice-six-faces-one.png" alt="" className="med-icon"/></td>
              <td><img src="/assets/Links/dice-six-faces-two.png" alt="" className="med-icon"/></td>
            </tr>
            <tr>
              <td><img src="/assets/Links/dice-six-faces-three.png" alt="" className="med-icon"/></td>
              <td><img src="/assets/Links/dice-six-faces-four.png" alt="" className="med-icon"/></td>
            </tr>
            <tr>
              <td><img src="/assets/Links/dice-six-faces-five.png" alt="" className="med-icon"/></td>
              <td><img src="/assets/Links/dice-six-faces-six.png" alt="" className="med-icon"/></td>
            </tr>
          </tbody>
        </table>
        <div className="euphoria-mid">
          <div>
            <span>1-3:</span>
            <span><img src="/assets/Links/Charterstone_Icon_Coin.png" alt="" className="med-icon"/></span>
            <span>/</span>
            <span><img src="/assets/Links/Charterstone_Icon_Pumpkin.png" alt="" className="med-icon"/></span>
          </div>
          <div>
            <span>4-8:</span>
            <span><img src="/assets/Links/star_victory.png" alt="" className="med-icon"/></span>
          </div>
          <div>
            <span>9+:</span>
            <span><img src="/assets/Links/heart.png" alt="" className="med-icon"/></span>
          </div>
        </div>
        <table className="euphoria2">
          <tbody>
            <tr>
              <td className="no-border" colspan="2"><img src="/assets/Links/Charterstone_Icon_Pumpkin.png" alt="" className="med-icon"/></td>
            </tr>
            <tr>
              <td><img src="/assets/Links/dice-six-faces-one.png" alt="" className="med-icon"/></td>
              <td><img src="/assets/Links/dice-six-faces-two.png" alt="" className="med-icon"/></td>
            </tr>
            <tr>
              <td><img src="/assets/Links/dice-six-faces-three.png" alt="" className="med-icon"/></td>
              <td><img src="/assets/Links/dice-six-faces-four.png" alt="" className="med-icon"/></td>
            </tr>
            <tr>
              <td><img src="/assets/Links/dice-six-faces-five.png" alt="" className="med-icon"/></td>
              <td><img src="/assets/Links/dice-six-faces-six.png" alt="" className="med-icon"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Euphoria;
