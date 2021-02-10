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

  return [
    <button
      className="minigameHeader"
      type="button"
      onClick={() => toggleMinigameSelector()}
    >
      {minigameName}
    </button>,
    isMinigameSelectorOpen ? (
      <div className="minigameSelector">
        {Object.keys(rounds).map((key) => {
          return (
            <button
              className="minigameOption"
              key={`${rounds[key].name}-selector`}
              type="button"
              onClick={() => updateMinigame(rounds[key].name, index)}
            >
              {rounds[key].name}
            </button>
          );
        })}
      </div>
    ) : null,
  ];
};

export default MinigameSelector;
