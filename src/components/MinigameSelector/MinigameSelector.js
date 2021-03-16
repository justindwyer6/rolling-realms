import React, { useState } from "react";
import rounds from "../../models/rounds";
import "./MinigameSelector.scss";

const MinigameSelector = ({
  index,
  minigameName,
  updateMinigame,
}) => {
  const [
    isMinigameSelectorOpen,
    setIsMinigameSelectorOpen,
  ] = useState(false);

  const toggleMinigameSelector = () => {
    if (!isMinigameSelectorOpen) {
      setIsMinigameSelectorOpen(true);
    } else {
      setIsMinigameSelectorOpen(false);
    }
  };

  return [
    <button
      className="minigameHeader"
      type="button"
      onClick={() => toggleMinigameSelector()}
    >
      <h2>{minigameName}</h2>
    </button>,
    isMinigameSelectorOpen ? (
      <div className="minigameSelector">
        {rounds.map((round) => {
          return (
            <button
              className="minigameOption"
              key={`${round.minigame}-selector`}
              type="button"
              onClick={() => updateMinigame(round.minigame, index)}
            >
              {round.minigame}
            </button>
          );
        })}
      </div>
    ) : null,
  ];
};

export default MinigameSelector;
