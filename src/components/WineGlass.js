import React, { useState } from "react";
import emptyWineGlass from "../images/empty-wine-glass.png";
import fullWineGlass from "../images/full-wine-glass.png";

const WineGlass = ([i]) => {
  const [wineGlassState, setWineGlassState] = useState(
    emptyWineGlass,
  );

  const updateGlass = () => {
    if (wineGlassState === emptyWineGlass) {
      setWineGlassState(fullWineGlass);
    } else {
      setWineGlassState(emptyWineGlass);
    }
  };

  return (
    <button
      type="button"
      aria-label="Wine Glass"
      title="Wine Glass"
      className="wineGlassC"
      onClick={updateGlass}
    >
      <img
        className="wineGlass"
        src={wineGlassState}
        alt="Wine Glass"
      />
      <p className="wineGlassText">{10 + i}</p>
    </button>
  );
};

export default WineGlass;
