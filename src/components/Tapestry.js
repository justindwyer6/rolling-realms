import React from 'react';
import TapestryTable from './TapestryTable';

class Tapestry extends React.Component {
  render() {
    return (
      <div className="tapestry-container">
        <div className="tapestry">
          <TapestryTable reward="pumpkin" />
          <TapestryTable reward="heart"/>
          <TapestryTable reward="coin"/>
          <img src="/assets/Links/star_victory.png" alt=""/>
          <TapestryTable reward="coin"/>
          <TapestryTable reward="pumpkin" />
          <TapestryTable reward="heart"/>
          <img src="/assets/Links/star_victory.png" alt=""/>
          <TapestryTable reward="heart"/>
          <TapestryTable reward="coin"/>
          <TapestryTable reward="pumpkin" />
          <img src="/assets/Links/star_victory.png" alt=""/>
          <img src="/assets/Links/star_victory.png" alt="" className="bottom-row" />
          <img src="/assets/Links/star_victory.png" alt="" className="bottom-row" />
          <img src="/assets/Links/star_victory.png" alt="" className="bottom-row" />
        </div>
        <img src="/assets/Links/tapestry-shapes.jpg" alt=""/>
      </div>
    );
  }
}

export default Tapestry;
