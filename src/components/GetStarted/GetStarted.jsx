import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Begin Your Brand Journey</span>
          <span className="secondaryText">
            Because your brand deserves more.
            <br />
            Unforgettable branding starts here. Trusted by startups and global brands alike.
          </span>
          <button className="button" href>
            <a href="mailto:joshlinecreations@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
