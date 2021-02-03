import React, { useState } from "react";
import "./ResourceGrid.scss";
import Resource from "../Resource/Resource";

const ResourceGrid = ({ resource }) => {
  const [topLeftState, setTopLeftState] = useState("unmarked");
  // const [topRightState, setTopRightState] = useState("unmarked");
  // const [bottomLeftState, setBottomLeftState] = useState("unmarked");
  // const [bottomRightState, setBottomRightState] = useState("unmarked");

  const renderQuadrant = () => (
    <button
      type="button"
      onClick={() =>
        setTopLeftState(
          topLeftState === "marked" ? "unmarked" : "marked",
        )
      }
      className={`resourceQuadrant ${topLeftState}`}
    >
      j
    </button>
  );

  return (
    <div className="ResourceGrid">
      <Resource name={resource} />
      <div className="resourceGridOverlay">{renderQuadrant()}</div>
    </div>
  );
};

export default ResourceGrid;
