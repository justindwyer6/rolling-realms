import React, { useState } from "react";
import rounds from "../../rounds";

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

  if (isMinigameSelectorOpen) {
    return (
      <>
        <button
          className="MinigameSelector"
          type="button"
          onClick={() => toggleMinigameSelector()}
        >
          {minigameName}
        </button>
        <div>
          {Object.keys(rounds).map((key) => {
            return (
              <button
                key={`${rounds[key]}-selector`}
                type="button"
                onClick={() => updateMinigame(rounds[key], index)}
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
      onClick={() => toggleMinigameSelector()}
    >
      {minigameName}
    </button>
  );
};

export default MinigameSelector;
