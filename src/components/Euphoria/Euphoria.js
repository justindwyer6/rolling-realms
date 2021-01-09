import React from "react";
import { times } from "lodash";
import Die from "../Die/Die";
import "./Euphoria.scss";

const Euphoria = () => {
  const renderDie = (i, alignment) => {
    return (
      <Die
        key={`euphoria-${alignment}-d6-${i + 1}`}
        dieFace={i + 1}
        dieType="standard"
        initialDieState="available"
      />
    );
  };

  return (
    <>
      <p>
        Either <span>mark 1 #</span> OR (if a pair is rolled) you may{" "}
        <span>mark both #s</span>. Then bonus is based on the sum of
        that area.
      </p>
      <div className="euphoriaC">
        <div className="table">
          {times(6, (i) => renderDie(i, "left"))}
        </div>
        <div className="euphoria-mid">
          <div>
            <span>1-3: </span>
            <span>
              <img
                src="/images/coin.png"
                alt="coin"
                className="reward"
              />
            </span>
          </div>
          <div>
            <span>4-10: </span>
            <span>
              <img
                src="/images/star.png"
                alt="star"
                className="reward"
              />
            </span>
          </div>
          <div>
            <span>11+: </span>
            <span>
              <img
                src="/images/heart.png"
                alt="heart"
                className="reward"
              />
            </span>
            <span>/</span>
            <span>
              <img
                src="/images/pumpkin.png"
                alt="pumpkin"
                className="reward"
              />
            </span>
          </div>
        </div>
        <div className="table">
          {times(6, (i) => renderDie(i, "right"))}
        </div>
      </div>
    </>
  );
};

export default Euphoria;
