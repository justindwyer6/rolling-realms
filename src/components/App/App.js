import React from "react";
import { useDispatch } from "react-redux";
// Components
import Minigame from "components/Minigame";
import RoundTracker from "components/RoundTracker";
import Header from "components/Header";
import IconButton from "components/IconButton";
import DiceRoller from "components/DiceRoller";
import Footer from "components/Footer";
import Rules from "components/Rules";
// Utilities
import copyLink from "utilities/copyLink";
import useSetRealms from "hooks/useSetRealms";
import useAreRulesOpen from "hooks/useAreRulesOpen";
import { actionCreators } from "reducers/app";
// Assets
import "./App.scss";
import printIconSrc from "images/print.png";
import linkIconSrc from "images/link.png";
import randomizeIconSrc from "images/randomize.png";
import rulesIconSrc from "images/rules.png";

const useToggleRules = () => {
  const dispatch = useDispatch();
  return () => dispatch(actionCreators.toggleRules());
};

const App = () => {
  const {
    randomizeRealms,
    realms,
    setRealm,
    setRealms,
  } = useSetRealms();
  const toggleRules = useToggleRules();
  const areRulesOpen = useAreRulesOpen();

  return (
    <div className="appContainer">
      <img
        style={{ display: "none" }}
        src="images/rolling-realms-cover.jpg"
        alt="Rolling Realms Logo"
      />
      <Rules rulesOpen={areRulesOpen} />
      <Header />
      <div className="utilities">
        <DiceRoller />
        <IconButton
          name="Rules"
          imgSrc={rulesIconSrc}
          onClick={() => toggleRules()}
        />
        <IconButton
          name="Copy URL"
          imgSrc={linkIconSrc}
          onClick={copyLink}
          giveSuccessFeedback
        />
        <IconButton
          name="Randomize"
          imgSrc={randomizeIconSrc}
          onClick={() => randomizeRealms(realms, setRealms)}
          confirmationRequired
          giveSuccessFeedback
        />
        <IconButton
          name="Print"
          imgSrc={printIconSrc}
          onClick={() => window.print()}
        />
      </div>
      {rounds.map((round, i) => {
        const roundNumber = i + 1;
        return (
          <>
            <RoundTracker
              key={`round-${roundNumber}-tracker`}
              round={roundNumber}
            />
            {round.realms.map((realm, j) => {
              return (
                <Minigame
                  key={`minigame-${realm.name}`}
                  index={j}
                  realm={realm}
                  roundNumber={roundNumber}
                  updateMinigame={setRealm}
                />
              );
            })}
          </>
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
