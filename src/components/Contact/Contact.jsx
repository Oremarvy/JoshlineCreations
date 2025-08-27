import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
  <div className="paddings innerWidth flexCenter c-container">
    {/* left side */}
    <div className="flexColStart c-left">
      <span className="orangeText">Contact Us</span>
      <span className="primaryText">Reach Out Anytime</span>
      <span className="secondaryText">
        Have a project in mind or need more details? 
        Get in touch with us — we’re just a message away.
      </span>

      <div className="flexColStart contactModes">
        {/* first row */}
        <div className="flexStart row">
          {/* Call */}
          <div className="flexColCenter mode">
            <div className="flexStart">
              <div className="flexCenter icon">
                <MdCall size={25} />
              </div>
              <div className="flexColStart detail">
                <span className="primaryText">Call</span>
                <span className="secondaryText">+234 818 931 3873</span>
              </div>
            </div>
            <a href="tel:+2348182223873" className="flexCenter button">
              Call now
            </a>
          </div>

          {/* Chat (WhatsApp) */}
          <div className="flexColCenter mode">
            <div className="flexStart">
              <div className="flexCenter icon">
                <BsFillChatDotsFill size={25} />
              </div>
              <div className="flexColStart detail">
                <span className="primaryText">Chat</span>
                <span className="secondaryText">+234 808 153 5004</span>
              </div>
            </div>
            <a
              href="https://wa.me/2348081535004"
              target="_blank"
              rel="noopener noreferrer"
              className="flexCenter button"
            >
              Chat now
            </a>
          </div>
        </div>

        {/* second row */}
        <div className="flexStart row">
          {/* Video Call */}
          <div className="flexColCenter mode">
            <div className="flexStart">
              <div className="flexCenter icon">
                <BsFillChatDotsFill size={25} />
              </div>
              <div className="flexColStart detail">
                <span className="primaryText">Video Call</span>
                <span className="secondaryText">+234 808 153 5004</span>
              </div>
            </div>
            <a
              href="https://wa.me/2348081535004?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20video%20call"
              target="_blank"
              rel="noopener noreferrer"
              className="flexCenter button"
            >
              Video Call now
            </a>
          </div>

          {/* Message (SMS) */}
          <div className="flexColCenter mode">
            <div className="flexStart">
              <div className="flexCenter icon">
                <HiChatBubbleBottomCenter size={25} />
              </div>
              <div className="flexColStart detail">
                <span className="primaryText">Message</span>
                <span className="secondaryText">+234 818 931 3873</span>
              </div>
            </div>
            <a href="sms:+2348189313873" className="flexCenter button">
              Message now
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* right side */}
    <div className="flexEnd c-right">
      <div className="image-container">
        <img src="./IMG-20250826-WA0328.jpg" alt="" />
      </div>
    </div>
  </div>
</div>
  );
};

export default Contact;
