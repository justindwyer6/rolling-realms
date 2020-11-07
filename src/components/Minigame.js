import React from 'react';
import Board from './Board';
import Star from './Star';

class Minigame extends React.Component {

  handleMinigameChange(event, minigame) {
    this.props.updateMinigame(event.target.value, minigame);
  }

  // handleRoundChange(event, minigame) {
  //   this.props.reorderRounds(parseInt(event.target.value), minigame);
  // }

  render() {
    const stars = [1,2,3,4,5,6];
    return (
      <>
        <div className="Minigame">
          <div className="content">
            <div className="minigameHeader">
              <div className="roundNumber">
                {this.props.roundNumber}
                {/* <select
                  name="roundNumber"
                  id={`${this.props.index}-round`}
                  defaultValue={this.props.roundNumber}
                  onChange={(event) => this.handleRoundChange(event, this.props.index)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select> */}
              </div>
              <div>
                <select
                  className="title"
                  name="minigameName"
                  id={this.props.minigame+this.props.key}
                  defaultValue={this.props.minigame}
                  onChange={(event) => this.handleMinigameChange(event, this.props.index)}
                >
                  {/* <optgroup label="Missing:">
                  </optgroup>
                  <optgroup label="In Use:"> */}
                    <option value="Between Two Castles">Between Two Castles</option>
                    <option value="Between Two Cities">Between Two Cities</option>
                    <option value="Charterstone">Charterstone</option>
                    <option value="Euphoria">Euphoria</option>
                    <option value="My Little Scythe">My Little Scythe</option>
                    <option value="Scythe">Scythe</option>
                    <option value="Tapestry">Tapestry</option>
                    <option value="Viticulture">Viticulture</option>
                    <option value="Wingspan">Wingspan</option>
                  {/* </optgroup> */}
                </select>
              </div>
            </div>
            <Board index={this.props.index} name={this.props.minigame} />
            {this.props.minigame === "Scythe"
              ? null
              : (
                <div className="stars-row">
                  {stars.map(star =>
                    <Star
                      key={star}
                      index={this.props.index+"-star-"+star}
                    />
                  )}
                </div>
              )
            }
          </div>
        </div>
      </>
    );
  }
}

export default Minigame;
