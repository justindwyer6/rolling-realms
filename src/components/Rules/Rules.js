import React from "react";
import "./Rules.scss";
import Resources from "../Resource/Resources";

const Rules = ({ rulesOpen }) => {
  return (
    <div className={`Rules ${rulesOpen ? "open" : "closed"}`}>
      <li>
        <Resources
          resources={["pumpkin", "pumpkin", "pumpkin"]}
          isCost
          classes="inline"
        />
        : adjust a die +/- 1
      </li>
      <li>
        <Resources
          resources={["pumpkin", "pumpkin"]}
          isCost
          classes="inline"
        />
        : adjust a die +/-1; you may use it in a realm you’ve already
        used this turn
      </li>
      <li>
        <Resources
          resources={["heart", "heart"]}
          isCost
          classes="inline"
        />
        : reuse a die if the non-adjusted dice show a pair
      </li>
      <li>
        <Resources
          resources={["heart", "heart", "heart"]}
          isCost
          classes="inline"
        />
        : reuse a die
      </li>
      <li>
        <Resources
          resources={["coin", "coin"]}
          isCost
          classes="inline"
        />
        : reuse a die if the non-adjusted dice sum is 7
      </li>
      <li>
        <Resources resources={["coin"]} isCost classes="inline" />
        x: gain a die of value X (1-6)
      </li>
      <hr />
      <li>
        Reused dice and extra #s can’t be used in the same realm(s) as
        other dice in the same turn
      </li>
      <li>Reuse dice as they were originally rolled</li>
      <li>Earned-but-unused resources are worth 0.1 stars each</li>
      <li>Resources do not carry over to the next round</li>
      <li>
        <a
          href="https://stonemaiergames.com/games/rolling-realms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Details, Print, and FAQs
        </a>
      </li>
    </div>
  );
};

export default Rules;
