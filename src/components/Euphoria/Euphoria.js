import React from "react";
import Die from "../Die/Die";
import "./Euphoria.scss";

const Euphoria = () => {
  const renderDie = (i, alignment) => {
    return (
      <Die
        key={`euphoria-${alignment}-d6-${i}`}
        dieFace={i}
        dieType="standard"
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

      {renderDie(1, "left")}
      {renderDie(2, "left")}
      <div>1-3: </div>
      <img src="/images/coin.png" alt="coin" className="reward" />
      {renderDie(1, "right")}
      {renderDie(2, "right")}

      {renderDie(3, "left")}
      {renderDie(4, "left")}
      <div>4-10: </div>
      <img src="/images/star.png" alt="star" className="reward" />
      {renderDie(3, "right")}
      {renderDie(4, "right")}

      {renderDie(5, "left")}
      {renderDie(6, "left")}
      <div>11+: </div>
      <div>
        <img src="/images/heart.png" alt="heart" className="reward" />
        /
        <img
          src="/images/pumpkin.png"
          alt="pumpkin"
          className="reward"
        />
      </div>
      {renderDie(5, "right")}
      {renderDie(6, "right")}
    </>
  );
};

export default Euphoria;
