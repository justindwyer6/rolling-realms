import React from "react";
import { times } from "lodash";
import "./Charterstone.scss";
import Resource from "../Resource/Resource";
import ResourceDie from "../ResourceDie/ResourceDie";
import crateSrc from "../../images/crate.png";

const Charterstone = () => {
  const renderDie = (i, resources) => {
    return (
      <ResourceDie
        key={`charterstone-d6-${i + 1}`}
        dieFace={i + 1}
        dieType="standard"
        classes="topRow"
        resourceName={resources[i]}
      />
    );
  };

  return (
    <>
      <p>
        Mark either a bonus (note the other rolled die on the crate)
        or all crates matching the die.
      </p>

      <div className="game">
        {times(6, (i) =>
          renderDie(i, [
            "pumpkin",
            "pumpkin",
            "heart",
            "heart",
            "coin",
            "coin",
          ]),
        )}
        {times(6, (i) => (
          <span key={i}>&darr;</span>
        ))}

        {times(6, (i) => (
          <div className="crateInput" key={i}>
            <input type="number" min="1" max="6" />
            <img className="crate" src={crateSrc} alt="crate" />
            <Resource name="star" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Charterstone;
