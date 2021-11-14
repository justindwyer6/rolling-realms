import React from "react";
import Draggable from "react-draggable";
import Resource from "components/Resource";
import "./Rules.scss";

const Rules = ({ rulesOpen }) => {
  return (
    <Draggable>
      <div className={`Rules ${rulesOpen ? "open" : "closed"}`}>
        <span>Rules</span>
        <span> (drag to move)</span>
        <li>
          <Resource name="pumpkin" isCost classes="inline" />
          x2: adjust a die +/- 1
        </li>
        <li>
          <Resource name="pumpkin" isCost classes="inline" />
          x3: adjust a die +/-1; you may use it in a realm you’ve
          already used this turn
        </li>
        <li>
          <Resource name="heart" isCost classes="inline" />
          x2: reuse a die if the non-adjusted dice show a pair
        </li>
        <li>
          <Resource name="heart" isCost classes="inline" />
          x3: reuse a die
        </li>
        <li>
          <Resource name="coin" isCost classes="inline" />
          x2: reuse a die if the non-adjusted dice sum is 7
        </li>
        <li>
          <Resource name="coin" isCost classes="inline" />
          xX: gain a die of value X (1-6)
        </li>
        <hr />
        <li>
          Reused dice and extra #s can’t be used in the same realm(s)
          as other dice in the same turn
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
    </Draggable>
  );
};

export default Rules;
