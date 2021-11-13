import React from "react";
import "./Footer.scss";
import githubIconSrc from "../../images/github-icon.png";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://stonemaiergames.com/games/rolling-realms/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Print-and-play other versions and find FAQs
      </a>
      <hr />
      <span>This is a fan-made, open-source project.</span>
      <a
        href="https://github.com/justin-dwyer/rolling-realms"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contribute on{" "}
        <img
          className="githubIcon"
          src={githubIconSrc}
          alt="Github"
        />
        {"  "}
        Github
      </a>
      <hr />
      <a
        href="https://github.com/justin-dwyer/rolling-realms"
        target="_blank"
        rel="noopener noreferrer"
      >
        Report a Bug
      </a>
    </footer>
  );
};

export default Footer;
