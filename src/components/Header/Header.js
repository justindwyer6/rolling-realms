import React from "react";
// import Rules from "../Rules";
import "./Header.scss";
import stonemaierLogoSrc from "../../images/stonemaier-logo.png";

const Header = () => {
  return (
    <div className="Header">
      <img
        className="stonemaierLogo"
        src={stonemaierLogoSrc}
        alt="Stonemaier Games Logo"
      />
      <h1 className="title">Rolling Realms</h1>
      <h3 className="attribution">by Jamey Stegmaier</h3>
      <p className="overview">
        Select 3 realms per round for all players.
        <br />
        <br /> On each of 9 turns, roll 2d6 for simultaneous use by
        all players. Use each die once, each in a different realm--you
        can’t use the same realm twice on the same turn. Most stars
        wins.
        <br />
        <span className="warning">
          Warning: Your progress may be lost if you refresh the page
          or change the order of the rounds.
        </span>
      </p>
      <div className="gameTotal">
        <p>TOTAL :</p>
        <input type="number" name="total" />
        <img src="/images/star.png" alt="star" />
      </div>
      {/* <Rules key="headerRules" /> */}
    </div>
  );
};

export default Header;
