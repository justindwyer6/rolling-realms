import React from 'react';

class WineGlass extends React.Component {
  state = { wineGlassClasses : this.props.wineGlassClasses }

  updateGlass = () => {
    let wineGlassClasses = this.state.wineGlassClasses;
    wineGlassClasses.includes("filled")
      ? wineGlassClasses = this.props.wineGlassClasses
      : wineGlassClasses += " filled";
    this.setState({ wineGlassClasses })
  }

  render() {
    return (
      <div
        className={this.state.wineGlassClasses}
        onClick={this.updateGlass}
      >
        {10+this.props.i}
      </div>
    );
  }
}

export default WineGlass;
