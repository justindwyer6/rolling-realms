import React, { useState } from "react";
import emptyWineGlass from "../../images/empty-wine-glass.png";
import fullWineGlass from "../../images/full-wine-glass.png";
import "./WineGlass.scss";

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
      <p className="wineGlassText">{sum}</p>
    </button>
  );
};

export default WineGlass;
