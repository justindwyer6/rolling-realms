import React, { useState } from "react";

const MinigameSelector = ({ minigameName }) => {
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
          <button type="button">Scythe</button>
          <button type="button">My Little Scythe</button>
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
