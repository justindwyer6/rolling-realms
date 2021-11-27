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
    updateGameOrder,
    randomizeRealms,
    realms,
    setRealms,
  } = useSetRealms();
  const toggleRules = useToggleRules();
  const areRulesOpen = useAreRulesOpen();

  return (
    <div className="appContainer">
      <Rules rulesOpen={areRulesOpen} />
      <Header />
      <div className="utilities">
        <DiceRoller />
        <IconButton
          name="Rules"
          imgSrc={rulesIconSrc}
          onClickFunction={() => toggleRules()}
        />
        <IconButton
          name="Copy URL"
          imgSrc={linkIconSrc}
          onClickFunction={copyLink}
          giveSuccessFeedback
        />
        <IconButton
          name="Randomize"
          imgSrc={randomizeIconSrc}
          onClickFunction={() => randomizeRealms(realms, setRealms)}
          confirmationRequired
          giveSuccessFeedback
        />
        <IconButton
          name="Print"
          imgSrc={printIconSrc}
          onClickFunction={() => window.print()}
        />
      </div>
      {Object.keys(realms).map((key, i) => {
        // Generate RoundTracker before every third Minigame
        const roundNumber = key / 3 + 1;
        return [
          (i + 1) % 3 === 1 ? (
            <RoundTracker
              key={`round-${roundNumber}-tracker`}
              round={roundNumber}
            />
          ) : null,
          <Minigame
            key={`minigame-${realms[key]}`}
            index={key}
            minigameName={realms[key]}
            roundNumber={roundNumber}
            updateMinigame={updateGameOrder}
          />,
        ];
      })}
      <Footer />
    </div>
  );
};

export default App;
