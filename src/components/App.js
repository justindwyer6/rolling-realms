import React from 'react';
import '../App.css';
import Minigame from './Minigame';
import Round from './Round';
import minigames from '../minigames';
import { times } from "lodash";

class App extends React.Component {
  state = { minigames };

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

  render() {
    return (
      <>
        <div className="header">
          <img className="sm-logo" src="/assets/Links/stonemaier-logo.png" alt="Stonemaier Games Logo"/>
          <div>
            <h2 className="title">Rolling Realms <span>v</span>10</h2>
            <h3>by Jamey Stegmaier</h3>
          </div>
          <p>
            Select 3 realms per round for all players. On each of 9 turns, roll 2d6 for simultaneous use by all players. Use each die once, each in a different realm--you can’t use the same realm twice on the same turn. Most stars wins.
          </p>
        </div>
        <div className="MinigamesC">
            {Object.keys(this.state.minigames).map(key => <Minigame key={key} index={key} minigame={this.state.minigames[key]} reorderGames={this.reorderGames} />)}
        </div>
        <footer>
          <div className="rounds">
            {times(3, (i) => <Round key={i} round={i} />)}
            <div className="total"></div>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
