import React, { useState } from "react";
import rounds from "../../rounds";
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

  return (
    <>
      <button
        className="minigameHeader"
        type="button"
        onClick={() => toggleMinigameSelector()}
      >
        <h2>{minigameName}</h2>
      </button>
      {isMinigameSelectorOpen && (
        <div className="minigameSelector">
          {Object.keys(rounds).map((key) => {
            return (
              <button
                className="minigameOption"
                key={`${rounds[key]}-selector`}
                type="button"
                onClick={() => updateMinigame(rounds[key], index)}
              >
                {rounds[key]}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MinigameSelector;
