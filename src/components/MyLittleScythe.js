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
                <img src="/assets/Links/dice-six-faces-6.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-1.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-5.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon">
              <img src="/assets/Links/Charterstone_Icon_Pumpkin.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-2.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon"></div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-3.png" alt="" className="med-icon"/>
              </div>
          </li>
          <li>
              <div class="hexagon">
                <img src="/assets/Links/dice-six-faces-4.png" alt="" className="med-icon"/>
              </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MyLittleScythe;
