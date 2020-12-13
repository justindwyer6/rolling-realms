import React from "react";

class WineGlass extends React.Component {
  state = { wineGlassFill: this.props.wineGlassFill };
  // state = { wineGlassClasses : this.props.wineGlassClasses }

  updateGlass = () => {
    let wineGlassFill = this.state.wineGlassFill;
    wineGlassFill === "/images/empty-wine-glass.png"
      ? (wineGlassFill = "/images/full-wine-glass.png")
      : (wineGlassFill = "/images/empty-wine-glass.png");
    this.setState({ wineGlassFill });
  };

  render() {
    return (
      <button className="wineGlassC" onClick={this.updateGlass}>
        <img
          className="wineGlass"
          src={this.state.wineGlassFill}
          alt="Wine Glass"
        />
        <p className="wineGlassText">{10 + this.props.i}</p>
      </button>
    );
  }
}

export default WineGlass;
