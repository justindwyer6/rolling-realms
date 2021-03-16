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
    if (matches > 1) {
      return "duplicate";
    }
    if (matches === 0) {
      return "missing";
    }
    return "";
  };

  return [
    <button
      className={`minigameHeader ${checkForDuplicateMinigames(
        minigame.name,
      )}`}
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
              className={`minigameOption  ${checkForDuplicateMinigames(
                round.minigame.name,
              )}`}
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
