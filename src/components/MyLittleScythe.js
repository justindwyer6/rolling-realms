import React from 'react';
import "./MyLittleScythe.scss";

class MyLittleScythe extends React.Component {
  render() {
    return (
      <div id="myLittleScythe">
        <div className="hexCrop">
          <div className="hexContainer">
            <div className="hex"></div>
            <div className="hex"></div>
            <div className="hex"></div>
            <div className="hex"></div>
            <div className="hex"></div>
            <div className="hex"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyLittleScythe;
