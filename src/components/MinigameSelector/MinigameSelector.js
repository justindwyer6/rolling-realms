import React, { useState } from "react";
import rounds from "../../rounds";

const MinigameSelector = ({ minigameName, updateMinigame }) => {
  const [
    isMinigameSelectorOpen,
    setIsMinigameSelectorOpen,
  ] = useState(false);

  const openMinigameSelector = () => {
    setIsMinigameSelectorOpen(true);
  };

  const closeMinigameSelector = () => {
    setIsMinigameSelectorOpen(false);
  };

  if (isMinigameSelectorOpen) {
    return (
      <>
        <button
          className="MinigameSelector"
          type="button"
          onClick={() => closeMinigameSelector()}
        >
          {minigameName}
        </button>
        <div>
          {Object.keys(rounds).map((key) => {
            return (
              <button
                type="button"
                onClick={() => {
                  updateMinigame();
                }}
              >
                {rounds[key]}
              </button>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <button
      className="MinigameSelector"
      type="button"
      onClick={() => openMinigameSelector()}
    >
      {minigameName}
    </button>
  );
};

export default MinigameSelector;
