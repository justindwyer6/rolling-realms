import React from 'react';

class BetweenTwoCastles extends React.Component {
  render() {
    return (
      <div className="betweenTwoCastles">
        <table className="betweenTwoCastles1">
          <tbody>
            <tr>
              <td className="no-border"></td>
              <td className="no-border"><img src="/assets/Links/Charterstone_Icon_Pumpkin.png" alt="" className="med-icon"/></td>
            </tr>
            <tr>
              <td className="no-border"></td>
              <td><input type="number" min="1" max="6"/></td>
              <td className="no-border"><img src="/assets/Links/heart.png" alt="" className="med-icon"/></td>
            </tr>
            <tr>
              <td className="no-border"><img src="/assets/Links/Charterstone_Icon_Pumpkin.png" alt="" className="med-icon"/></td>
              <td><input type="number" min="1" max="6"/></td>
              <td><input type="number" min="1" max="6"/></td>
            </tr>
            <tr>
              <td><input type="number" min="1" max="6"/></td>
              <td><img src="/assets/Links/wooden-door.png" alt="" className="med-icon"/></td>
              <td><input type="number" min="1" max="6"/></td>
            </tr>
          </tbody>
        </table>
        <table className="betweenTwoCastles2">
          <tbody>
            <tr>
              <td className="no-border"><img src="/assets/Links/Charterstone_Icon_Coin.png" alt="" className="med-icon"/></td>
              <td className="no-border">
                <img src="/assets/Links/Charterstone_Icon_Coin.png" alt="" className="med-icon overlap"/>
                <img src="/assets/Links/heart.png" alt="" className="med-icon underlap"/>
              </td>
            </tr>
            <tr>
              <td><input type="number" min="1" max="6"/></td>
              <td><input type="number" min="1" max="6"/></td>
            </tr>
            <tr>
              <td><input type="number" min="1" max="6"/></td>
              <td><input type="number" min="1" max="6"/></td>
            </tr>
            <tr>
              <td><img src="/assets/Links/doorway.png" alt="" className="med-icon"/></td>
              <td><input type="number" min="1" max="6"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BetweenTwoCastles;
