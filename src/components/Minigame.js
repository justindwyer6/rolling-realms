import React from 'react';
import Board from './Board';
import Star from './Star';

const Minigame = (props) => {

  const handleMinigameChange = (event, minigame) => {
    this.props.updateMinigame(event.target.value, minigame);
  }

  const stars = [1,2,3,4,5,6];

  return (
    <>
      <div className="Minigame" >
        <div className="content">
          <div className="minigameHeader">
            <div className="roundNumber">
              {props.roundNumber}
            </div>
            <div>
              <select
                className="title"
                name="minigameName"
                id={props.minigame+props.key}
                defaultValue={props.minigame}
                onChange={(event) => handleMinigameChange(event, props.index)}
                onBlur={(event) => handleMinigameChange(event, props.index)}
              >
                <option value="Between Two Castles">Between Two Castles</option>
                <option value="Between Two Cities">Between Two Cities</option>
                <option value="Charterstone">Charterstone</option>
                <option value="Euphoria">Euphoria</option>
                <option value="My Little Scythe">My Little Scythe</option>
                <option value="Scythe">Scythe</option>
                <option value="Tapestry">Tapestry</option>
                <option value="Viticulture">Viticulture</option>
                <option value="Wingspan">Wingspan</option>
              </select>
            </div>
          </div>
          <Board
            index={props.index}
            name={props.minigame}
          />
          {props.minigame === "Scythe"
            ? null
            : (
              <div className="stars-row">
                {stars.map(star =>
                  <Star
                    key={star}
                    index={props.index+"-star-"+star}
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

export default Minigame;
