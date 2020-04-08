import React from 'react';

class BetweenTwoCities extends React.Component {
  render() {
    return (
      <table className="betweenTwoCities">
        <tbody>
          <tr>
          <td><input type="number" min="1" max="6"/></td>
          <td><input type="number" min="1" max="6"/></td>
          <td><input type="number" min="1" max="6"/></td>
          <td>
            <img src="/assets/Links/Charterstone_Icon_Pumpkin.png" alt="" className="med-icon overlap"/>
            <img src="/assets/Links/Charterstone_Icon_Coin.png" alt="" className="med-icon underlap"/>
          </td>
          </tr>
          <tr>
          <td><input type="number" min="1" max="6"/></td>
          <td><input type="number" min="1" max="6"/></td>
          <td><input type="number" min="1" max="6"/></td>
          <td>
            <img src="/assets/Links/Charterstone_Icon_Coin.png" alt="" className="med-icon overlap"/>
            <img src="/assets/Links/heart.png" alt="" className="med-icon underlap"/>
          </td>
          </tr>
          <tr>
          <td><input type="number" min="1" max="6"/></td>
          <td><input type="number" min="1" max="6"/></td>
          <td><input type="number" min="1" max="6"/></td>
          <td>
            <img src="/assets/Links/heart.png" alt="" className="med-icon overlap"/>
            <img src="/assets/Links/Charterstone_Icon_Pumpkin.png" alt="" className="med-icon underlap"/>
          </td>
          </tr>
          <tr>
          <td>
            <img src="/assets/Links/Charterstone_Icon_Pumpkin.png" alt="" className="med-icon overlap"/>
            <img src="/assets/Links/Charterstone_Icon_Pumpkin.png" alt="" className="med-icon underlap same"/>
          </td>
          <td>
          <img src="/assets/Links/Charterstone_Icon_Coin.png" alt="" className="med-icon overlap"/>
            <img src="/assets/Links/Charterstone_Icon_Coin.png" alt="" className="med-icon underlap same"/>
          </td>
          <td>
          <img src="/assets/Links/heart.png" alt="" className="med-icon overlap"/>
            <img src="/assets/Links/heart.png" alt="" className="med-icon underlap same"/>
          </td>
          <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default BetweenTwoCities;
