import React, { useState, useEffect } from "react";
import "./App.scss";
import Minigame from "../Minigame/Minigame";
import RoundTracker from "../RoundTracker/RoundTracker";
import Header from "../Header/Header";
import defaultRounds from "../../rounds";
import {
  setQueryStringValue,
  setRoundsUsingQueryString,
} from "../../functions/queryString";
import randomizeMinigames from "../../functions/randomizeMinigames";

const App = () => {
  const [rounds, setRounds] = useState(defaultRounds);
  const [copyLinkButtonClasses, setCopyLinkButtonClasses] = useState(
    "circleButton shareIcon",
  );

  // Update rounds state to match query string
  useEffect(() => {
    setRoundsUsingQueryString(rounds, setRounds);
  }, []);

  // Update query string to match rounds state
  useEffect(() => {
    setQueryStringValue(rounds);
  }, [rounds]);

  const updateMinigame = (minigame, round) => {
    const updatingRoundOrder = { ...rounds };
    updatingRoundOrder[round] = minigame;
    setRounds({ ...updatingRoundOrder });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location).then(
      () => {
        setCopyLinkButtonClasses("circleButton checkIcon");
        setTimeout(() => {
          setCopyLinkButtonClasses("circleButton shareIcon");
        }, 3000);
      },
      () => {
        setCopyLinkButtonClasses("circleButton exIcon");
        setTimeout(() => {
          setCopyLinkButtonClasses("circleButton shareIcon");
        }, 6000);
      },
    );
  };

  return (
    <div className="appContainer">
      <Header />
      <div className="subheader">
        <div className="roundSelectionButtons">
          <button
            type="button"
            className="standardButton"
            onClick={() => randomizeMinigames(rounds, setRounds)}
          >
            Randomize
          </button>
          <button
            type="button"
            aria-label="Copy Link"
            title="Copy Link"
            className={copyLinkButtonClasses}
            onClick={copyLink}
          />
        </div>
        <button
          type="button"
          aria-label="Print Page"
          title="Print Page"
          className="circleButton printIcon"
          onClick={() => window.print()}
        />
      </div>
      {Object.keys(rounds).map((key, i) => {
        // Generate RoundTracker before every third Minigame
        return [
          (i + 1) % 3 === 1 ? (
            <RoundTracker
              key={`round-${key.charAt(0)}-tracker`}
              round={key.charAt(0)}
            />
          ) : null,
          <Minigame
            key={`minigame-${rounds[key]}`}
            index={key}
            minigameName={rounds[key]}
            roundNumber={key.charAt(0)}
            updateMinigame={updateMinigame}
          />,
        ];
      })}
      {/* <Rules />> */}
      {/* <DiceRoller />> */}
    </div>
  );
};

export default App;
