import React from 'react';
import TapestryTable from './TapestryTable';
import { times } from 'lodash';

class Tapestry extends React.Component {
  render() {
    const VictoryStar = () => <img src="/assets/Links/star_victory.png" alt="star" />
    const VictoryStarBottom = () => <img src="/assets/Links/star_victory.png" alt="star" className="bottom-row" />
    return (
      <div className="tapestry-container">
        <div className="tapestry">
          <TapestryTable reward="pumpkin" />
          <TapestryTable reward="heart"/>
          <TapestryTable reward="coin"/>
          <VictoryStar />
          <TapestryTable reward="coin"/>
          <TapestryTable reward="pumpkin" />
          <TapestryTable reward="heart"/>
          <VictoryStar />
          <TapestryTable reward="heart"/>
          <TapestryTable reward="coin"/>
          <TapestryTable reward="pumpkin" />
          <VictoryStar />
          {times(3, () => <VictoryStarBottom />)}
        </div>
        <img src="/assets/Links/tapestry-shapes.jpg" alt="star"/>
      </div>
    );
  }
}

export default Tapestry;
