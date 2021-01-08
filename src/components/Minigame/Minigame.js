import React from "react";
import Board from "../Board";
import Star from "../Star/Star";
import "./Minigame.scss";

const Minigame = ({ index, minigameName, updateMinigame }) => {
  const stars = [1, 2, 3, 4, 5, 6];
  return (
    <div className="Minigame">
      <div className="minigameHeader">
        <select
          className="title"
          name="minigameName"
          id={minigameName + minigameName}
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
          <option value="My Little Scythe">My Little Scythe</option>
          <option value="Scythe">Scythe</option>
          <option value="Tapestry">Tapestry</option>
          <option value="Viticulture">Viticulture</option>
          <option value="Wingspan">Wingspan</option>
        </select>
      </div>
      <Board minigameName={minigameName} />
      {minigameName === "Scythe" ? null : (
        <div className="stars-row">
          {stars.map((star) => (
            <Star key={star} index={`${index}-star-${star}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Minigame;
