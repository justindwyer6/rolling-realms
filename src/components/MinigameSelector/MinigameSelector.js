import React, { useState } from "react";
import realms from "../../realms";
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
        {Object.keys(realms).map((key) => {
          return (
            <button
              className="minigameOption"
              key={`${realms[key]}-selector`}
              type="button"
              onClick={() => updateMinigame(realms[key], index)}
            >
              {realms[key]}
            </button>
          );
        })}
      </div>
    ) : null,
  ];
};

export default MinigameSelector;
