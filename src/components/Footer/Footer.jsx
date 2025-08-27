import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./jh.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to shape brands <br />
            the world can't ignore.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Lagos, Nigeria.</span>
          <div className="flexCenter f-menu">
            <a href="https://instagram.com/joshlinecreations" 
            target="_blank" rel="noopener noreferrer">Instagram </a>
            <a href="https://facebook.com/joshlinecreations" 
            target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@joshlinecreations" 
            target="_blank" rel="noopener noreferrer">TikTok</a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
