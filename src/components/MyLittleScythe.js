import React from 'react';
import Hexagon from './Hexagon';

class MyLittleScythe extends React.Component {
  render() {
    return (
      <>
        <p>
        Mark a hex and gain a pumpkin or heart.
        </p>
        <div className="myLittleScytheC">
          <div className="myLittleScythe">
            <ul id="grid" className="clear">
              <li>
                <div className="hexagon"></div>
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="6" />
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="1" />
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="5" />
              </li>
              <li>
                <div className="hexagon">
                  <img src="/assets/Links/pumpkin.png" alt="pumpkin" className="reward"/>
                </div>
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="2" />
              </li>
              <li>
                <div className="hexagon"></div>
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="4" />
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="3" />
              </li>
            </ul>
          </div>
          <div className="myLittleScythe">
            <ul id="grid" className="clear">
              <li>
                <div className="hexagon"></div>
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="6" />
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="1" />
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="5" />
              </li>
              <li>
                <div className="hexagon">
                  <img src="/assets/Links/heart.png" alt="heart" className="reward"/>
                </div>
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="2" />
              </li>
              <li>
                <div className="hexagon"></div>
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="4" />
              </li>
              <li>
                <Hexagon hexagonClasses="hexagon" dieFace="3" />
              </li>
            </ul>
          </div>
        </div>
        <p>
          Gain 1<img className="inline-image" src="/assets/Links/star_victory.png" alt="star"/> (a) if you’ve earned total of 7<img className="inline-image" src="/assets/Links/pumpkin.png" alt="pumpkin"/>, (b) if you’ve earned a total of 7<img className="inline-image" src="/assets/Links/heart.png" alt="heart"/>, and (c) per pair of matching #s between the areas.
        </p>
      </>
    );
  }
}

export default MyLittleScythe;
