import React, { useState } from "react";
// Components
import Minigame from "../Minigame/Minigame";
import RoundTracker from "../RoundTracker/RoundTracker";
import Header from "../Header/Header";
import IconButton from "../IconButton/IconButton";
import DiceRoller from "../DiceRoller/DiceRoller";
import Footer from "../Footer/Footer";
import Rules from "../Rules/Rules";
// Utilities
import copyLink from "../../utilities/copyLink";
import toggleRules from "../../utilities/toggleRules";
import useSetRounds from "../../hooks/useSetRounds";
// Assets
import "./App.scss";
import printIconSrc from "../../images/print.png";
import linkIconSrc from "../../images/link.png";
import randomizeIconSrc from "../../images/randomize.png";
import rulesIconSrc from "../../images/rules.png";

const App = () => {
  const {
    updateGameOrder,
    randomizeMinigames,
    rounds,
    setRounds,
  } = useSetRounds();
  const [rulesOpen, setRulesOpen] = useState(false);

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
            updateMinigame={updateGameOrder}
          />,
        ];
      })}
      <Footer />
    </div>
  );
};

export default App;
