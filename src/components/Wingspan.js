import React from "react";
import "./Wingspan.scss";
import { times } from "lodash";

class Wingspan extends React.Component {
  renderBirds() {
    return (
      <div>hi</div>
    );
  }
  render() {
    return (
      <div className="birds">
        {times(3, () => this.renderBirds())}
      </div>
      // birds grid
      //  feather w/ points h3
      //  grid w/ offset rewards
    );
  }
}

export default Wingspan
