import React from "react";
import Board from "../Board";
import MinigameSelector from "../MinigameSelector/MinigameSelector";
import Star from "../Star/Star";
import "./Minigame.scss";

const Minigame = ({
  currentRounds,
  roundId,
  minigame,
  updateMinigame,
}) => {
  const stars = [1, 2, 3, 4, 5, 6];
  return (
    <div className={`Minigame ${minigame.name.replace(/ +/g, "")}`}>
      <MinigameSelector
        currentRounds={currentRounds}
        roundId={roundId}
        minigame={minigame}
        updateMinigame={updateMinigame}
      />
      <Board minigameName={minigame.name} />
      <>
        {stars.map((star) => (
          <Star key={star} index={`${roundId}-star-${star}`} />
        ))}
      </>
    </div>
  );
};

export default Minigame;
