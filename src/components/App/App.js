import React, { useState, useEffect } from "react";
import "./App.scss";
import Minigame from "../Minigame/Minigame";
import RoundTracker from "../RoundTracker/RoundTracker";
import Rules from "../Rules";
import defaultRounds from "../../rounds";
import { setQueryStringValue } from "../../functions/queryString";

const qs = require("query-string");

const App = () => {
  const [rounds, setRounds] = useState(defaultRounds);
  const [copyLinkButtonClasses, setCopyLinkButtonClasses] = useState(
    "circleButton shareIcon",
  );

  // Update rounds state to match query string
  useEffect(() => {
    const parsedQueryString = qs.parse(window.location.search);
    Object.keys(parsedQueryString).forEach((key) => {
      if (
        Object.keys(parsedQueryString).length !== 9 ||
        ![
          "1a",
          "1b",
          "1c",
          "2a",
          "2b",
          "2c",
          "3a",
          "3b",
          "3c",
        ].includes(key) ||
        ![
          "Scythe",
          "Between Two Cities",
          "Charterstone",
          "Between Two Castles",
          "Viticulture",
          "Euphoria",
          "Scythe",
          "Tapestry",
          "Wingspan",
        ].includes(parsedQueryString[key])
      ) {
        return;
      }
      if (parsedQueryString[key] !== rounds[key]) {
        setRounds({ ...parsedQueryString });
      }
    });
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

  const randomizeMinigames = () => {
    const allMinigames = [
      "Scythe",
      "Between Two Cities",
      "Charterstone",
      "Between Two Castles",
      "Viticulture",
      "Euphoria",
      "Scythe",
      "Tapestry",
      "Wingspan",
    ];

    const shuffle = (array) => {
      let currentIndex = array.length;
      let temporaryValue;
      let randomIndex;
      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex]; // eslint-disable-line no-param-reassign
        array[randomIndex] = temporaryValue; // eslint-disable-line no-param-reassign
      }
      return array;
    };

    const shuffledMinigames = shuffle(allMinigames);
    const roundsCopy = { ...rounds };
    // eslint-disable-next-line no-unused-vars
    Object.entries(roundsCopy).forEach(([key, value], i) => {
      roundsCopy[key] = shuffledMinigames[i];
    });
    setRounds({ ...roundsCopy });
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
      <div className="header">
        <img
          className="sm-logo"
          src="/images/stonemaier-logo.png"
          alt="Stonemaier Games Logo"
        />
        <div className="titleC">
          <h2 className="title">
            Rolling Realms <span>v</span>10
          </h2>
          <h3>by Jamey Stegmaier</h3>
        </div>
        <p>
          Select 3 realms per round for all players. On each of 9
          turns, roll 2d6 for simultaneous use by all players. Use
          each die once, each in a different realm--you can’t use the
          same realm twice on the same turn. Most stars wins.
          <br />
          <span className="warning">
            Warning: Your progress may be lost if you refresh the page
            or change the order of the rounds.
          </span>
        </p>
        <div className="gameTotal">
          <p>TOTAL :</p>
          <input type="number" name="total" />
          <img src="/images/star.png" alt="star" />
        </div>
        <Rules key="headerRules" />
      </div>
      <div className="subheader">
        <div className="roundSelectionButtons">
          <button
            type="button"
            className="standardButton"
            onClick={randomizeMinigames}
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
      <footer>
        <div className="contribute">
          <p>
            <a
              href="https://stonemaiergames.com/games/rolling-realms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Print-and-play other versions and find FAQs
            </a>
          </p>
          <hr />
          <p>This is a fan-made, open-source project.</p>
          <p>
            <a
              href="https://github.com/justin-dwyer/rolling-realms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute on{" "}
              <img
                className="githubIcon"
                src="/images/github-icon.png"
                alt="Github"
              />{" "}
              Github
            </a>
          </p>
          <p>
            <a
              href="https://github.com/justin-dwyer/rolling-realms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report a Bug
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
