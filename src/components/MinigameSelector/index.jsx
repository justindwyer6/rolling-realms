import React, { useState } from "react";
import realms from "realms";
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
      {isMinigameSelectorOpen ? (
        <div className="minigameSelector">
          {realms.map((realm) => {
            return (
              <button
                className="minigameOption"
                key={`${realm.id}-selector`}
                type="button"
                onClick={() => updateMinigame(realm, index)}
              >
                {realm.name}
              </button>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default MinigameSelector;
