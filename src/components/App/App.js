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
import defaultRounds from "../../models/rounds";
// Functions
import {
  setQueryStringValue,
  setRoundsUsingQueryString,
} from "../../utilities/queryString";
import randomizeMinigames from "../../utilities/randomizeMinigames";
import copyLink from "../../utilities/copyLink";
import toggleRules from "../../utilities/toggleRules";
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

  const updateMinigame = (minigame, roundId) => {
    setRounds(
      rounds.map((round) => {
        if (round.id !== roundId) return round;
        return { ...round, minigame };
      }),
    );
  };

  return (
    <div className="appContainer">
      <Rules rulesOpen={rulesOpen} setRulesOpen={setRulesOpen} />
      <Header />
      <div className="utilities">
        <IconButton
          name="Open rules"
          imgSrc={rulesIconSrc}
          onClickFunction={() => toggleRules(rulesOpen, setRulesOpen)}
        />
        <IconButton
          name="Copy layout link"
          imgSrc={linkIconSrc}
          onClickFunction={copyLink}
        />
        <IconButton
          name="Randomize minigames"
          imgSrc={randomizeIconSrc}
          onClickFunction={() =>
            randomizeMinigames(rounds, setRounds)
          }
          confirmationRequired
        />
        <IconButton
          name="Print your game"
          imgSrc={printIconSrc}
          onClickFunction={() => window.print()}
        />
        <DiceRoller />
      </div>
      {rounds.map((round) => {
        const roundNumber = round.id.charAt(0);
        // Generate RoundTracker before every third Minigame
        return [
          (round.id + 1) % 3 === 1 ? (
            <RoundTracker
              key={`round-${roundNumber}-tracker`}
              round={roundNumber}
            />
          ) : null,
          <Minigame
            key={`minigame-${round.minigame}`}
            roundId={round.id}
            minigameName={round.minigame}
            roundNumber={roundNumber}
            updateMinigame={updateMinigame}
          />,
        ];
      })}
      <Footer />
    </div>
  );
};

export default App;
