import React from 'react';
import '../App.css';
import Minigame from './Minigame';
import minigames from '../minigames';

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
      <div className="App">
          {Object.keys(this.state.minigames).map(key => <Minigame key={key} index={key} minigame={this.state.minigames[key]} reorderGames={this.reorderGames} />)}
      </div>
    );
  }
}

export default App;
