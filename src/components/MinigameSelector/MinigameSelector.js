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

  const renderMinigameSelector = () => (
    <button
      className="minigameHeader"
      type="button"
      onClick={() => toggleMinigameSelector()}
    >
      {minigameName}
    </button>
  );

  if (!isMinigameSelectorOpen) {
    return renderMinigameSelector();
  }
  return [
    renderMinigameSelector(),
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
    </div>,
  ];
};

export default MinigameSelector;
