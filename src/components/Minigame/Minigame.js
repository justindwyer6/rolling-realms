import React from "react";
import Board from "../Board";
import MinigameSelector from "../MinigameSelector/MinigameSelector";
import Star from "../Star/Star";
import "./Minigame.scss";

const Minigame = React.memo(
  ({ index, minigameName, updateMinigame }) => {
    const stars = [1, 2, 3, 4, 5, 6];
    console.log(minigameName);

    return (
      <div className={`Minigame ${minigameName.replace(/ +/g, "")}`}>
        <MinigameSelector
          index={index}
          minigameName={minigameName}
          updateMinigame={updateMinigame}
        />
        <Board minigameName={minigameName} />
        <>
          {stars.map((star) => (
            <Star key={star} index={`${index}-star-${star}`} />
          ))}
        </>
      </div>
    );
  },
);

export default Minigame;
