import React, { useState } from "react";
import "./ResourceGrid.scss";
import Resource from "../Resource/Resource";

const ResourceGrid = ({ resource }) => {
  const [topLeftState, setTopLeftState] = useState("unmarked");
  // const [topRightState, setTopRightState] = useState("unmarked");
  // const [bottomLeftState, setBottomLeftState] = useState("unmarked");
  // const [bottomRightState, setBottomRightState] = useState("unmarked");

  return (
    <div className="ResourceGrid">
      <Resource name={resource} />
      <div>
        <button
          type="button"
          onClick={setTopLeftState(
            topLeftState === "marked" ? "unmarked" : "marked",
          )}
          className={topLeftState}
        >
          j
        </button>
      </div>
    </div>
  );
};

export default ResourceGrid;
