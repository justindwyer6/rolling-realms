import React from "react";

const Rules = () => {
  return (
    <div className="rules">
      <p>Pay:</p>
      <p>
        • 2
        <img
          className="inline-image"
          src="/images/pumpkin.png"
          alt="pumpkin"
        />
        : adjust a die +/- 1
      </p>
      <p>
        • 3
        <img
          className="inline-image"
          src="/images/pumpkin.png"
          alt="pumpkin"
        />
        : adjust a die +/-1; you may use it in a realm you’ve already
        used this turn
      </p>
      <p>
        • 2
        <img
          className="inline-image"
          src="/images/heart.png"
          alt="heart"
        />
        : reuse a die if the non-adjusted dice show a pair
      </p>
      <p>
        • 3
        <img
          className="inline-image"
          src="/images/heart.png"
          alt="heart"
        />
        : reuse a die
      </p>
      <p>
        • 2
        <img
          className="inline-image"
          src="/images/coin.png"
          alt="coin"
        />
        : reuse a die if the non-adjusted dice sum is 7
      </p>
      <p>
        • X
        <img
          className="inline-image"
          src="/images/coin.png"
          alt="coin"
        />
        : gain a die of value X (1-6)
      </p>
      <hr />
      <p>
        • Reused dice and extra #s can’t be used in the same realm(s)
        as other dice in the same turn
      </p>
      <p>• Reuse dice as they were originally rolled</p>
      <p>• Earned-but-unused resources are worth 0.1 stars each</p>
      <p>• Resources do not carry over to the next round</p>
      <p>
        •{" "}
        <a
          href="https://stonemaiergames.com/games/rolling-realms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Details, Print, and FAQs
        </a>
      </p>
    </div>
  );
};

export default Rules;
