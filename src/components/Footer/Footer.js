import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="contribute">
        <p>
          <a
            href="https://stonemaiergames.com/games/rolling-realms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Print-and-play other versions and find FAQs
          </a>
        </p>
        <hr />
        <p>This is a fan-made, open-source project.</p>
        <p>
          <a
            href="https://github.com/justin-dwyer/rolling-realms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on{" "}
            <img
              className="githubIcon"
              src="/images/github-icon.png"
              alt="Github"
            />{" "}
            Github
          </a>
        </p>
        <p>
          <a
            href="https://github.com/justin-dwyer/rolling-realms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Report a Bug
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
