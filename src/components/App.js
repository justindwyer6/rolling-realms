import React from 'react';
import './App.scss';
import Minigame from './Minigame';
import Round from './Round';
import minigames from '../minigames';
// import { times } from "lodash";

class App extends React.Component {
  state = {
    minigames: minigames,
    footerClasses: ""
  };

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

  showRules = () => {
    let footerClasses = this.state.footerClasses;
    footerClasses.includes("show") ? footerClasses = "" : footerClasses += " show";
    this.setState({ footerClasses });
  }

  renderRoundTracker = (i) => {
    if ( !((i+1) % 3) ) {
      return (
        <Round key={i+1} round={((i+1)/3)-1} />
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
          <div>
            <h2 className="title">Rolling Realms <span>v</span>10</h2>
            <h3>by Jamey Stegmaier</h3>
          </div>
          <p>
            Select 3 realms per round for all players. On each of 9 turns, roll 2d6 for simultaneous use by all players. Use each die once, each in a different realm--you can’t use the same realm twice on the same turn. Most stars wins.
            <br></br><span>Warning: Your progress will be lost if you refresh the page or change the order of the rounds.</span>
          </p>
          <div className="gameTotal">
            <p>
              TOTAL :
            </p>
            <input type="number" name="total" />
            <img src="/assets/Links/star_victory.png" alt="star"/>
          </div>
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
          {/* <div className="rounds">
            {times(3, (i) => <Round key={i} round={i} />)}
            <div className="total"></div>
          </div> */}
          Rules
          <div className="rules">
            <p>• Pay 2<img className="inline-image" src="/assets/Links/pumpkin.png" alt="pumpkin"/> to adjust a die +/- 1
            </p>
            <p>
              • Pay 3<img className="inline-image" src="/assets/Links/pumpkin.png" alt="pumpkin"/> to adjust a die +/-1; you may use it in a realm you’ve already used this turn
            </p>
            <p>
              • Pay 2<img className="inline-image" src="/assets/Links/heart.png" alt="heart"/> if the non-adjusted dice show a pair to reuse a die
            </p>
            <p>
              • Pay 3<img className="inline-image" src="/assets/Links/heart.png" alt="heart"/> to reuse a die
            </p>
            <p>
              • Pay 2<img className="inline-image" src="/assets/Links/coin.png" alt="coin"/> if the non-adjusted dice sum is 7 to reuse a die
            </p>
            <p>
              • Pay X<img className="inline-image" src="/assets/Links/coin.png" alt="coin"/> to gain a die of value X (1-6)
            </p>
            <p>
              • Reused dice and extra #s can’t be used in the same realm(s) as other dice in the same turn
            </p>
            <p>
              • Reuse dice as they were originally rolled
            </p>
            <p>
              • Earned-but-unused resources are worth 0.1 stars each
            </p>
            <p>
              • Resources do not carry over to the next round
            </p>
            <p>
              • <a href="https://stonemaiergames.com/games/rolling-realms/" target="_blank" rel="noopener noreferrer">Details, Print, and FAQs</a>
            </p>
          </div>
        </div>
        <img class="printIcon" src="/assets/print.png" alt="print" onClick={() => window.print()} />
        <div className="footer">
          <div class="contribute">
            <p>This is a fan-made, open-source project.</p>
            <p>
              <a href="https://github.com/justin-dwyer/rolling-realms" target="_blank" rel="noopener noreferrer">Contribute on <img className="githubIcon" src="/assets/github-icon.png" alt="Github"/> Github</a>
            </p>
            <p>
              <a href="https://github.com/justin-dwyer/rolling-realms" target="_blank" rel="noopener noreferrer">Report a Bug</a>
            </p>
            <p>
              <a href="https://stonemaiergames.com/games/rolling-realms/" target="_blank" rel="noopener noreferrer">Print-and-play other versions and find FAQs</a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default App;
