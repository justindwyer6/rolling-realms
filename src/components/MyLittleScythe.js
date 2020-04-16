import React from 'react';

class MyLittleScythe extends React.Component {
  render() {
    return (
      <div className="myLittleScythe">
        <ul id="grid" class="clear">
          <li>
              <div class="hexagon"></div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-six.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-one.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-five.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon">
              <img src="/assets/Links/Charterstone_Icon_Pumpkin.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-two.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon"></div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-three.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-four.png" alt="" className="med-icon"/>
              </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MyLittleScythe;
