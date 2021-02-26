import React, { useState, useEffect } from "react";
// Components
import Minigame from "../Minigame/Minigame";
import RoundTracker from "../RoundTracker/RoundTracker";
import Header from "../Header/Header";
import IconButton from "../IconButton/IconButton";
import DiceRoller from "../DiceRoller/DiceRoller";
import Footer from "../Footer/Footer";
import Rules from "../Rules/Rules";
// Data Models
import defaultRounds from "../../rounds";
// Functions
import {
  setQueryStringValue,
  setRoundsUsingQueryString,
} from "../../functions/queryString";
import randomizeMinigames from "../../functions/randomizeMinigames";
import copyLink from "../../functions/copyLink";
import toggleRules from "../../functions/toggleRules";
// Assets
import "./App.scss";
import printIconSrc from "../../images/print.png";
import linkIconSrc from "../../images/link.png";
import randomizeIconSrc from "../../images/randomize.png";
import rulesIconSrc from "../../images/rules.png";

const App = () => {
  const [rounds, setRounds] = useState(defaultRounds);
  const [rulesOpen, setRulesOpen] = useState(false);

  useEffect(() => {
    setRoundsUsingQueryString(rounds, setRounds);
  }, []);

  useEffect(() => {
    setQueryStringValue(rounds);
  }, [rounds]);

  const updateMinigame = (minigame, round) => {
    const updatingRoundOrder = { ...rounds };
    updatingRoundOrder[round] = minigame;
    setRounds({ ...updatingRoundOrder });
  };

  return (
    <div className="appContainer">
      <Rules rulesOpen={rulesOpen} setRulesOpen={setRulesOpen} />
      <Header />
      <div className="utilities">
        <IconButton
          name="Open rules (needs attribution)"
          imgSrc={rulesIconSrc}
          onClickFunction={() => toggleRules(rulesOpen, setRulesOpen)}
        />
        <IconButton
          name="Copy layout link"
          imgSrc={linkIconSrc}
          onClickFunction={copyLink}
        />
        <IconButton
          name="standardButton"
          imgSrc={randomizeIconSrc}
          onClickFunction={() =>
            randomizeMinigames(rounds, setRounds)
          }
        />
        <IconButton
          name="Print your game"
          imgSrc={printIconSrc}
          onClickFunction={() => window.print()}
        />
        <DiceRoller />
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
      <Footer />
    </div>
  );
};

export default App;
