import React, { useState } from "react";
import "./WineGlass.scss";
import emptyWineGlass from "images/empty-wine-glass.png";
import fullWineGlass from "images/full-wine-glass.png";

const WineGlass = ({ sum }) => {
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
      className="WineGlass empty"
      onClick={updateGlass}
    >
      <img
        className="wineGlassImage"
        src={wineGlassState}
        alt="Wine Glass"
      />
      <span className="wineGlassText">{sum}</span>
    </button>
  );
};

export default WineGlass;
