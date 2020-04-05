import React from 'react';

class Minigame extends React.Component {
  render() {
    return (
      <div className="Minigame">
        <div className="content">
          <h2>Minigame</h2>
          <p>Some rules about this minigame. Use 1 die to do a thing, and that thing will give you points.</p>
          {/* <Game /> */}
            {/* <table>
              <tr>
                <td>Tacos</td>
                <td>Tacos</td>
                <td>Tacos</td>
              </tr>
              <tr>
                <td>Tacos</td>
                <td>Tacos</td>
                <td>Tacos</td>
              </tr>
              <tr>
                <td>Tacos</td>
                <td>Tacos</td>
                <td>Tacos</td>
              </tr>
            </table> */}
          <p>Some extra clarifying rules and probably some star icons too.</p>
          <div className="stars">
            <img src='/assets/Links/outline_star.png' alt="star"></img>
            <img src='/assets/Links/outline_star.png' alt="star"></img>
            <img src='/assets/Links/outline_star.png' alt="star"></img>
            <img src='/assets/Links/outline_star.png' alt="star"></img>
            <img src='/assets/Links/outline_star.png' alt="star"></img>
            <img src='/assets/Links/outline_star.png' alt="star"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Minigame;
