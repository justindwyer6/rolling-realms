import React, { useState } from "react";
import defaultRounds from "../../models/rounds";
import "./MinigameSelector.scss";

const MinigameSelector = ({
  currentRounds,
  roundId,
  minigame,
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

  const checkForDuplicateMinigames = (minigameName) => {
    const matches = currentRounds.reduce(
      (accumulator, roundCompare) =>
        minigameName === roundCompare.minigame.name
          ? accumulator + 1
          : accumulator,
      0,
    );
    return matches > 1;
  };

  return [
    <button
      className={`minigameHeader ${
        checkForDuplicateMinigames(minigame.name) ? "duplicate" : ""
      }`}
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
              className={`minigameOption  ${
                checkForDuplicateMinigames(round.minigame.name)
                  ? "duplicate"
                  : ""
              }`}
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
