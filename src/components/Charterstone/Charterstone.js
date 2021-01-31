import React from "react";
import { times } from "lodash";
import Die from "../Die/Die";
import "./Charterstone.scss";

const Charterstone = () => {
  const rewards = [
    "pumpkin",
    "pumpkin",
    "heart",
    "heart",
    "coin",
    "coin",
  ];

  const renderDie = (i) => {
    return (
      <Die
        key={`charterstone-d6-${i + 1}`}
        dieFace={i + 1}
        dieType="standard"
      />
    );
  };

  const renderRewards = (i, theseRewards) => {
    return (
      <img
        className="topReward"
        key={`charterstone-rewards-${theseRewards[i]}-${i}`}
        src={`/images/${theseRewards[i]}.png`}
        alt={theseRewards[i]}
      />
    );
  };

  return (
    <>
      <p>
        Mark either <span>a bonus</span> (note the other rolled die on
        the crate) or <span>all crates matching the die</span>.
      </p>

      <div className="game">
        {times(6, (i) => renderDie(i))}
        {times(6, (i) => renderRewards(i, rewards))}
        {times(6, (i) => (
          <img src="/images/red-arrow.png" alt="arrow" key={i} />
        ))}
        {times(6, (i) => (
          <div key={i}>
            <input type="number" min="1" max="6" />
            <img src="/images/open-crate.png" alt="crate" />
          </div>
        ))}
        {times(6, (i) => (
          <img src="/images/red-arrow.png" alt="arrow" key={i} />
        ))}
      </div>
    </>
  );
};

export default Charterstone;
