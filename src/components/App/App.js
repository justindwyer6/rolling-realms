import React, { useState, useEffect } from "react";
// Components
import Minigame from "../Minigame/Minigame";
import RoundTracker from "../RoundTracker/RoundTracker";
import Header from "../Header/Header";
import Button from "../Button/Button";
import randomizeMinigames from "../../functions/randomizeMinigames";
import Footer from "../Footer/Footer";
// Data Models
import defaultRounds from "../../rounds";
// Functions
import {
  setQueryStringValue,
  setRoundsUsingQueryString,
} from "../../functions/queryString";
// Assets
import "./App.scss";
import printIconSrc from "../../images/print.png";
import linkIconSrc from "../../images/link.png";
import randomizeIconSrc from "../../images/randomize.png";
import rulesIconSrc from "../../images/rules.png";
import dieSrc from "../../images/d6-1.png";

const App = () => {
  const [rounds, setRounds] = useState(defaultRounds);
  // const [copyLinkButtonClasses, setCopyLinkButtonClasses] = useState(
  //   "circleButton shareIcon",
  // );

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
    console.log("I work!");
    // navigator.clipboard.writeText(window.location).then(
    //   () => {
    //     setCopyLinkButtonClasses("circleButton checkIcon");
    //     setTimeout(() => {
    //       setCopyLinkButtonClasses("circleButton shareIcon");
    //     }, 3000);
    //   },
    //   () => {
    //     setCopyLinkButtonClasses("circleButton exIcon");
    //     setTimeout(() => {
    //       setCopyLinkButtonClasses("circleButton shareIcon");
    //     }, 6000);
    //   },
    // );
  };

  return (
    <div className="appContainer">
      <Header />
      <div className="subheader">
        <Button
          name="standardButton"
          imgSrc={randomizeIconSrc}
          onClickFunction={() =>
            randomizeMinigames(rounds, setRounds)
          }
        >
          Randomize
        </Button>
        <Button
          name="Copy layout link"
          imgSrc={linkIconSrc}
          onClickFunction={copyLink}
        />
        <Button
          name="Print your game"
          imgSrc={printIconSrc}
          onClickFunction={() => window.print()}
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
      <Button
        name="Open rules"
        imgSrc={rulesIconSrc}
        onClickFunction={() => console.log("Rules work!")}
      />
      <Button
        name="Roll dice"
        imgSrc={dieSrc}
        onClickFunction={() => console.log("Dice work!")}
      />
      <Footer />
    </div>
  );
};

export default App;
