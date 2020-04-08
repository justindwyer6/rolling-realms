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
          {Object.keys(this.state.minigames).map(key => <Minigame key={key} index={key} minigame={this.state.minigames[key]} />)}
      </div>
    );
  }
}

export default App;
