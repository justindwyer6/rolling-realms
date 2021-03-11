import React, { useState } from "react";
import "./ResourceGrid.scss";
import Resource from "../Resource/Resource";

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

  function handleQuadrantUpdate(
    quadrantName,
    quadrantState,
    setQuadrantState,
  ) {
    if (premarked !== quadrantName) {
      setQuadrantState(
        quadrantState === "marked" ? "unmarked" : "marked",
      );
    }
  }

  const renderQuadrant = (
    quadrantName,
    quadrantState,
    setQuadrantState,
  ) => (
    <button
      type="button"
      aria-label={`${quadrantState} ${resource} ${quadrantName} quadrant`}
      onClick={() =>
        handleQuadrantUpdate(
          quadrantName,
          quadrantState,
          setQuadrantState,
        )
      }
      onDragEnter={() =>
        handleQuadrantUpdate(
          quadrantName,
          quadrantState,
          setQuadrantState,
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
