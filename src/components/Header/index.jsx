import React from "react";
import StarTracker from "components/StarTracker";
import "./Header.scss";
import stonemaierLogoSrc from "images/stonemaier-logo.png";

const Header = () => {
  return (
    <header className="Header">
      <img
        className="stonemaierLogo"
        src={stonemaierLogoSrc}
        alt="Stonemaier Games Logo"
      />
      <h1 className="title">Rolling Realms</h1>
      <h2 className="attribution">by Jamey Stegmaier</h2>
      <p className="overview">
        Select 3 realms per round for all players. On each of 9 turns,
        roll 2d6 for simultaneous use by all players. Use each die
        once, each in a different realm—you can’t use the same realm
        twice on the same turn. Most stars wins.
      </p>
      <StarTracker round={0} />
      {/* <Rules key="headerRules" /> */}
    </header>
  );
};

export default Header;
