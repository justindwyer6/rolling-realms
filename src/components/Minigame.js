import React from "react";
import Board from "./Board";
import Star from "./Star/Star";

const Minigame = ({
  key,
  index,
  minigameName,
  roundNumber,
  updateMinigame,
}) => {
  const stars = [1, 2, 3, 4, 5, 6];
  console.log("minigame");
  console.log(minigameName);
  return (
    <div className="Minigame">
      <div className="content">
        <div className="minigameHeader">
          <div className="roundNumber">{`${roundNumber}`}</div>
          <div>
            <select
              className="title"
              name="minigameName"
              id={minigameName + key}
              defaultValue={minigameName}
              onChange={(event) =>
                updateMinigame(event.target.value, index)
              }
              onBlur={(event) =>
                updateMinigame(event.target.value, index)
              }
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
        {console.log("JUST BEFORE BOARD IS RENDERED")}
        {console.log(minigameName)}
        <Board minigameName={minigameName} />
        {minigameName === "Scythe" ? null : (
          <div className="stars-row">
            {stars.map((star) => (
              <Star key={star} index={`${index}-star-${star}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Minigame;
