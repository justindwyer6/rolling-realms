import React, { useState } from "react";
import Resource from "components/Resource";
import "./ResourceGrid.scss";

const ResourceGrid = ({ resource, premarked = "" }) => {
  const [topLeftState, setTopLeftState] = useState(
    premarked === "topLeft" ? "premarked" : "unmarked",
  );
  const [topRightState, setTopRightState] = useState(
    premarked === "topRight" ? "premarked" : "unmarked",
  );
  const [bottomLeftState, setBottomLeftState] = useState(
    premarked === "bottomLeft" ? "premarked" : "unmarked",
  );
  const [bottomRightState, setBottomRightState] = useState(
    premarked === "bottomRight" ? "premarked" : "unmarked",
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
        premarked === quadrantName
          ? null
          : setQuadrantState(
              quadrantState === "marked" ? "unmarked" : "marked",
            )
      }
      className={`resourceQuadrant ${quadrantName} ${quadrantState}`}
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
