import React from 'react';
import '../App.css';
import Minigame from './Minigame';
import minigames from '../minigames';

class App extends React.Component {
  state = {
    minigames: minigames
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Minigame name rulesA game rulesB/>
          <Minigame />
          <Minigame />
          <Minigame />
          <Minigame />
          <Minigame />
          <Minigame />
          <Minigame />
          <Minigame />
        </header>
      </div>
    );
  }
}

export default App;
