import React, { useState, useEffect } from 'react';
import './App.scss';
import Minigame from './Minigame';
import Round from './Round';
import Rules from './Rules';
import defaultRounds from '../rounds';
import { times } from "lodash";
// const queryString = require('query-string');

// console.log(window.location.search);
// const parsed = queryString.parse(window.location.search);
// console.log(parsed);
// const queryStringSyncObject = {};
// // Consider for...in loop
// Object.keys(parsed).map((key, i) => {
//   console.log(key + " : " + parsed[key]);
//   queryStringSyncObject[key] = {minigame: parsed[key], roundNumber: Math.ceil((i+1)/3)};
// });
// console.log(queryStringSyncObject)
const App = () => {
  const [rounds, setRounds] = useState({ ...defaultRounds });
  const [footerClasses, setFooterClasses] = useState("");
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(6);

  useEffect(() => {

  });

  const rollDice = () => {
    times(6, (i) => {
      let die1 = i;
      let die2 = ( 7 - i );
      setTimeout(() => {
        setDie1(die1);
        setDie2(die2);
      }, (50 + i*15));
    })
    let die1 = Math.ceil(Math.random()*6);
    let die2 = Math.ceil(Math.random()*6);
    setTimeout(() => {
      setDie1(die1);
      setDie2(die2);
    }, 350);
  }

  const updateMinigame = (minigame, round) => {
    const updatingRoundOrder = { ...rounds };
    updatingRoundOrder[round] = minigame;
    setRounds({ ...updatingRoundOrder });
  }

  const randomizeMinigames = () => {
    const allMinigames = [
      "Scythe",
      "Between Two Cities",
      "Charterstone",
      "Between Two Castles",
      "Viticulture",
      "Euphoria",
      "My Little Scythe",
      "Tapestry",
      "Wingspan"
    ];

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    const shuffledMinigames = shuffle(allMinigames);
    const roundsCopy = { ...rounds };
    // eslint-disable-next-line no-unused-vars
    Object.entries(roundsCopy).forEach(([key, value], i) => {
      value = shuffledMinigames[i];
    });
    setRounds({ ...roundsCopy});
  }

  const showRules = () => {
    footerClasses.includes("show") ? setFooterClasses("") : setFooterClasses(" show");
  }

  const renderRoundTracker = (key, i) => {
    if (key === "1c" || key === "2c" || key === "3c") {
      return <Round key={i} round={i-1} />
    }
  }

  return (
    <>
      <div className="header">
        <img className="sm-logo" src="/assets/Links/stonemaier-logo.png" alt="Stonemaier Games Logo"/>
        <div className="titleC">
          <h2 className="title">Rolling Realms <span>v</span>10</h2>
          <h3>by Jamey Stegmaier</h3>
        </div>
        <p>
          Select 3 realms per round for all players. On each of 9 turns, roll 2d6 for simultaneous use by all players. Use each die once, each in a different realm--you can’t use the same realm twice on the same turn. Most stars wins.
          <br></br><span className="warning">Warning: Your progress may be lost if you refresh the page or change the order of the rounds.</span>
        </p>
        <div className="gameTotal">
          <p>
            TOTAL :
          </p>
          <input type="number" name="total" />
          <img src="/assets/Links/star_victory.png" alt="star"/>
        </div>
        <Rules key="headerRules" />
      </div>

      <div className="subheader">
        <button className="standardButton" onClick={randomizeMinigames}>Randomize</button>
        <button className="printButton" onClick={() => window.print()}>
          <img className="printIcon" src="/assets/print.png" alt="print" />
        </button>
      </div>

      <div className="MinigamesC">
        {Object.keys(rounds).map((key, i) => {
          return (
            <>
              <Minigame
                key={rounds[key]}
                index={key}
                i={i}
                minigame={rounds[key]}
                roundNumber={key[0]}
                updateMinigame={updateMinigame}
              />
              {renderRoundTracker(key, rounds[key].roundNumber)}
            </>
          );
        })}
      </div>

      <button id="fixedRules" className={footerClasses} onClick={showRules}>
        <h4>
          Rules
        </h4>
        <Rules key="floatRules" />
      </button>

      <button className="standardButton diceRoller" onClick={rollDice} >
        <img
          className="rolledDie"
          src={`/assets/Links/dice-six-faces-${die1}.png`}
          alt={`Rolled Die`}
        />
        <img
          className="rolledDie"
          src={`/assets/Links/dice-six-faces-${die2}.png`}
          alt={`Rolled Die`}
        />
      </button>

      <footer>
        <div className="contribute">
          <p>
            <a href="https://stonemaiergames.com/games/rolling-realms/" target="_blank" rel="noopener noreferrer">Print-and-play other versions and find FAQs</a>
          </p>
          <hr></hr>
          <p>This is a fan-made, open-source project.</p>
          <p>
            <a href="https://github.com/justin-dwyer/rolling-realms" target="_blank" rel="noopener noreferrer">Contribute on <img className="githubIcon" src="/assets/github-icon.png" alt="Github"/> Github</a>
          </p>
          <p>
            <a href="https://github.com/justin-dwyer/rolling-realms" target="_blank" rel="noopener noreferrer">Report a Bug</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
