import React from "react";
import MinigameSelector from "../MinigameSelector/MinigameSelector";
import Star from "../Star/Star";
import "./Minigame.scss";

const Minigame = ({ index, minigame, updateMinigame }) => {
  const stars = [1, 2, 3, 4, 5, 6];
  return (
    <div className={`Minigame ${minigame.name}`}>
      <MinigameSelector
        index={index}
        minigameName={minigame.name}
        updateMinigame={updateMinigame}
      />
      {minigame.component}
      <>
        {stars.map((star) => (
          <Star key={star} index={`${index}-star-${star}`} />
        ))}
      </>
    </div>
  );
};

export default Minigame;
