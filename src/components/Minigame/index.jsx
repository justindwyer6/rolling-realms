import React from "react";
import ErrorBoundary from "components/ErrorBoundary";
import Board from "components/Board";
import MinigameSelector from "components/MinigameSelector";
import Star from "components/Star";
import "./Minigame.scss";

const Minigame = ({ index, minigameName, updateMinigame }) => {
  const stars = [1, 2, 3, 4, 5, 6];
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default Minigame;
