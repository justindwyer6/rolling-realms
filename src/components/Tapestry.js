import React from 'react';
// import TapestryTable from './TapestryTable';
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

  subgrid = <div className="subgrid">hi</div>;

  renderSubgrid(i) {
    return (
      <div key={i} className={`subgrid ${this.reward[i]}`}>
        {times(4, (j) => (
          <div key={j}>
            <input
              type="checkbox"
              name="check"
              id={i+"checkbox"+j}
              checked={this.prechecked.includes(i+"checkbox"+j) ? true : false}
              disabled={this.prechecked.includes(i+"checkbox"+j) ? true : false}
            />
          </div>
        ))}
      </div>
    );
  }

  render() {
    // const VictoryStar = () => <img src="/assets/Links/star_victory.png" alt="star" />
    // const VictoryStarBottom = () => <img src="/assets/Links/star_victory.png" alt="star" className="bottom-row" />
    // return (
    //   <div className="tapestry-container">
    //     <div className="tapestry">
    //       <TapestryTable reward="pumpkin" />
    //       <TapestryTable reward="heart"/>
    //       <TapestryTable reward="coin"/>
    //       <VictoryStar />
    //       <TapestryTable reward="coin"/>
    //       <TapestryTable reward="pumpkin" />
    //       <TapestryTable reward="heart"/>
    //       <VictoryStar />
    //       <TapestryTable reward="heart"/>
    //       <TapestryTable reward="coin"/>
    //       <TapestryTable reward="pumpkin" />
    //       <VictoryStar />
    //       {times(3, () => <VictoryStarBottom />)}
    //     </div>
    //     <img src="/assets/Links/tapestry-shapes.jpg" alt="star"/>
    //   </div>
    // );
    return (
      <>
        <p>Use 1 die to fill a shape (rotating is ok; no limit to uses of each #). If you complete a BIG square, gain a bonus.</p>
        <div className="tapestryC">
          {times(9, i => this.renderSubgrid(i))}
        </div>
        <p>Score 1 star per completed BIG row/column (6 total).</p>
      </>
    );
  }
}

export default Tapestry;
