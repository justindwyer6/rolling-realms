import React from "react";
import { times } from "lodash";
import Resource from "components/Resource";
import DSixInput from "components/DSixInput";
import "./Wingspan.scss";
import featherSrc from "images/feather.png";

const Wingspan = () => {
  const renderBird = (i, wingspanOfBird, resourceList) => (
    <div key={`bird-${i}`} className="bird">
      <img src={featherSrc} alt="feather" className="featherImage" />
      <span>{wingspanOfBird}</span>
      {times(3, (j) => (
        <div
          key={`bird-${i}-input-${j}`}
          className="inputResourceContainer"
        >
          <DSixInput />
          <Resource name={resourceList[j]} alt={resourceList[j]} />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <p>
        Fill a square on any bird (left to right), then gain the bonus
        below that square. Score 1 star per complete bird whose sum =
        wingspan.
      </p>
      <div className="game">
        {renderBird(0, 7, ["pumpkin", "coin", "star"])}
        {renderBird(1, 12, ["coin", "heart", "star"])}
        {renderBird(2, 16, ["heart", "pumpkin", "star"])}
      </div>
    </>
  );
};

export default Wingspan;
