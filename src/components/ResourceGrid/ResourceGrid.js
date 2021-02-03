import React, { useState } from "react";
import "./ResourceGrid.scss";
import Resource from "../Resource/Resource";

const ResourceGrid = ({ resource }) => {
  const [topLeftState, setTopLeftState] = useState("unmarked");
  const [topRightState, setTopRightState] = useState("unmarked");
  const [bottomLeftState, setBottomLeftState] = useState("unmarked");
  const [bottomRightState, setBottomRightState] = useState(
    "unmarked",
  );

  const renderQuadrant = (
    quadrantName,
    quadrantState,
    setQuadrantState,
  ) => (
    <button
      type="button"
      aria-label={`${quadrantState} ${resource} ${quadrantName} quadrant`}
      onClick={() =>
        setQuadrantState(
          quadrantState === "marked" ? "unmarked" : "marked",
        )
      }
      className={`resourceQuadrant ${quadrantName} ${topLeftState}`}
    />
  );

  return (
    <div className="ResourceGrid">
      <Resource name={resource} />
      <div className="resourceGridOverlay">
        {renderQuadrant("topLeft", topLeftState, setTopLeftState)}
        {renderQuadrant("topRight", topRightState, setTopRightState)}
        {renderQuadrant(
          "bottomLeft",
          bottomLeftState,
          setBottomLeftState,
        )}
        {renderQuadrant(
          "bottomRight",
          bottomRightState,
          setBottomRightState,
        )}
      </div>
    </div>
  );
};

export default ResourceGrid;
