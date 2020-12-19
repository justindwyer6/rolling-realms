import React from "react";
import Board from "./Board";
import Star from "./Star/Star";

const Minigame = ([
  updateMinigame,
  roundNumber,
  minigame,
  key,
  index,
]) => {
  const handleMinigameChange = (event, thisMinigame) => {
    updateMinigame(event.target.value, thisMinigame);
  };

  const stars = [1, 2, 3, 4, 5, 6];
  console.log("sup");
  return (
    <>
      <div className="Minigame">
        <div className="content">
          <div className="minigameHeader">
            <div className="roundNumber">{roundNumber}</div>
            <div>
              <select
                className="title"
                name="minigameName"
                id={minigame + key}
                defaultValue={minigame}
                onChange={(event) =>
                  handleMinigameChange(event, index)
                }
                onBlur={(event) => handleMinigameChange(event, index)}
              >
                <option value="Between Two Castles">
                  Between Two Castles
                </option>
                <option value="Between Two Cities">
                  Between Two Cities
                </option>
                <option value="Charterstone">Charterstone</option>
                <option value="Euphoria">Euphoria</option>
                <option value="My Little Scythe">
                  My Little Scythe
                </option>
                <option value="Scythe">Scythe</option>
                <option value="Tapestry">Tapestry</option>
                <option value="Viticulture">Viticulture</option>
                <option value="Wingspan">Wingspan</option>
              </select>
            </div>
          </div>
          <Board name={minigame} />
          {minigame === "Scythe" ? null : (
            <div className="stars-row">
              {stars.map((star) => (
                <Star key={star} index={`${index}-star-${star}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Minigame;
