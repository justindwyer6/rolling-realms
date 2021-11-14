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
        <IconButton
          name="Open rules"
          imgSrc={rulesIconSrc}
          onClickFunction={() => toggleRules()}
        />
        <IconButton
          name="Copy layout link"
          imgSrc={linkIconSrc}
          onClickFunction={copyLink}
        />
        <IconButton
          name="Randomize minigames"
          imgSrc={randomizeIconSrc}
          onClickFunction={() => randomizeRealms(realms, setRealms)}
          confirmationRequired
        />
        <IconButton
          name="Print your game"
          imgSrc={printIconSrc}
          onClickFunction={() => window.print()}
        />
        <DiceRoller />
      </div>
      {realms.map((realm, i) => {
        // Generate RoundTracker before every third Realm
        const roundNumber = i / 3 + 1;
        return [
          (i + 1) % 3 === 1 ? (
            <RoundTracker
              key={`round-${roundNumber}-tracker`}
              round={roundNumber}
            />
          ) : null,
          <Minigame
            key={`minigame-${realm.name}`}
            index={realm.id}
            realm={realm}
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
