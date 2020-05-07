import React from 'react';
import "./Tapestry.scss"
import { times } from 'lodash';

class Tapestry extends React.Component {

  reward = ["pumpkin", "heart", "coin", "coin", "pumpkin", "heart", "heart", "coin", "pumpkin"];

  prechecked = [
    "0checkbox3",
    "2checkbox1",
    "4checkbox0",
    "5checkbox3",
    "6checkbox0",
    "7checkbox3",
  ]

  renderSubgrid(i) {
    return (
      <div key={i} className={`subgrid ${this.reward[i]}`}>
        {times(4, (j) => (
          <div key={j}>
            <input
              type="checkbox"
              name="check"
              id={i+"checkbox"+j}
              defaultChecked={this.prechecked.includes(i+"checkbox"+j) ? true : false}
              disabled={this.prechecked.includes(i+"checkbox"+j) ? true : false}
            />
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <>
        <p>Use 1 die to fill a shape (rotating is ok; no limit to uses of each #). Gain a bonus for completing BIG (2x2) squares.</p>
        <div className="gridGuideAlignTapestry">
          <div className="tapestryC">
            {times(9, i => ( (i+1) % 3 )
              ? this.renderSubgrid(i)
              : [
                this.renderSubgrid(i),
                <img key={"star"+i} className="star" src="/assets/Links/star_victory.png" alt="star"/>
              ]
            )}
            {times(3, i =>
              <img key={"star"+i} className="star" src="/assets/Links/star_victory.png" alt="star"/>
            )}
          </div>
          <img className="guide" src="/assets/Links/tapestry-shapes.jpg" alt="guide"/>
        </div>
        <p>Score 1 star per completed BIG (2x6) row/column (6 total).</p>
      </>
    );
  }
}

export default Tapestry;
