import React, { useState } from "react";
import defaultRounds from "../../models/rounds";
import "./MinigameSelector.scss";

const MinigameSelector = ({ roundId, minigame, updateMinigame }) => {
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
      <h2>{minigame.name}</h2>
    </button>,
    isMinigameSelectorOpen ? (
      <div className="minigameSelector">
        {defaultRounds.map((round) => {
          return (
            <button
              className="minigameOption"
              key={`${round.minigame.name}-selector`}
              type="button"
              onClick={() => updateMinigame(round.minigame, roundId)}
            >
              {round.minigame.name}
            </button>
          );
        })}
      </div>
    ) : null,
  ];
};

export default MinigameSelector;
