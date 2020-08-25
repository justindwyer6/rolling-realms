import React from 'react';
import './App.scss';
import Minigame from './Minigame';
import Round from './Round';
import Rules from './Rules';
import minigames from '../minigames';

class App extends React.Component {
  state = {
    minigames: minigames,
    footerClasses: "",
    die1: 1,
    die2: 6
  };

  componentDidMount() {
    const images = ["grape", "crushed-grape", "full-wine-glass", "empty-wine-glass"];
    images.forEach(image => {
      const img = new Image();
      img.src = `/assets/${image}.png`;
    })
  }

  rollDice = () => {
    let die1 = Math.ceil(Math.random()*6);
    let die2 = Math.ceil(Math.random()*6);
    window.setTimeout(() => {
      console.log("hi")
      this.setState({ die1, die2 })
    }, 5000);
  }

  reorderGames = (roundNumber, minigame) => {
    const unordered = { ...this.state.minigames };
    const roundOrder = {};

    unordered[minigame.name.replace(/\s+/g, '')].roundNumber = roundNumber;

    function sortByRoundNumber(a, b) {
      for (const item in unordered) {
        if (item.name === minigame.name) {
          item.roundNumber = roundNumber;
        }
      }
      const result = unordered[a].roundNumber > unordered[b].roundNumber ? 1 : -1;
      return result;
    }

    Object.keys(unordered).sort(sortByRoundNumber).forEach(key => {
      roundOrder[key] = unordered[key];
    });
    this.setState({ minigames: roundOrder });
  }

  randomizeRounds = () => {
    const minigames = { ...this.state.minigames };
    let roundsToAssign = [1, 1, 1, 2, 2, 2, 3, 3, 3];
    Object.keys(minigames).forEach((key) => {
      const minigame = minigames[key];
      const arrayRoundAssigned = Math.floor(Math.random()*roundsToAssign.length);
      const roundNumberAssigned = roundsToAssign[arrayRoundAssigned];
      roundsToAssign.splice(arrayRoundAssigned, 1);
      this.reorderGames(roundNumberAssigned, minigame);
    });
  }

  showRules = () => {
    let footerClasses = this.state.footerClasses;
    footerClasses.includes("show") ? footerClasses = "" : footerClasses += " show";
    this.setState({ footerClasses });
  }

  renderRoundTracker = (i) => {
    if ( !((i+1) % 3) ) {
      return (
        <Round key={(i+1)/3} round={((i+1)/3)-1} />
      );
    }
    else {
      return null;
    }
  }

  render() {
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
          <button className="standardButton" onClick={this.randomizeRounds} >Randomize</button>
          <img className="printIcon" src="/assets/print.png" alt="print" onClick={() => window.print()} />
        </div>

        <div className="MinigamesC">
          {Object.keys(this.state.minigames).map((key, i) => {
            return (
              <>
                <Minigame key={key} index={key} i={i} minigame={this.state.minigames[key]} reorderGames={this.reorderGames} />
                {this.renderRoundTracker(i)}
              </>
            );
          })}
        </div>

        <div id="fixedRules" className={this.state.footerClasses} onClick={this.showRules}>
          <h4>
          	Rules
          </h4>
          <Rules key="floatRules" />
        </div>

        <button className="standardButton diceRoller" onClick={this.rollDice} >
          <img
            className="rolledDie"
            src={`/assets/Links/dice-six-faces-${this.state.die1}.png`}
            alt={`Rolled Die`}
          />
          <img
            className="rolledDie"
            src={`/assets/Links/dice-six-faces-${this.state.die2}.png`}
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
}

export default App;
