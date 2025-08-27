import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  // list of carousel slides (each with image + text)
  const slides = [
    {
      image: "./IMG-20250826-WA0330.jpg",
      title: "Discover Your Brand's Voice",
      desc1: "From visionary design to game-changing strategies",
      desc2: "We build brands that can’t be ignored."
    },
    {
      image: "./IMG-20250826-WA0331.jpg",
      title: "Designing Prints That Speak for Your Brand.",
      desc1: "Crafting sleek designs and bold experiences",
      desc2: "Your brand deserves to stand out online."
    },
    {
      image: "./IMG-20250826-WA0332.jpg",
      title: "Bringing Brands to Life, One Print at a Time.",
      desc1: "We turn concepts into powerful brand stories",
      desc2: "Building connections that matter."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              key={slides[currentIndex].title}
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "ease-in",
              }}
            >
              {slides[currentIndex].title.split("<br />").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>{slides[currentIndex].desc1}</span>
            <span>{slides[currentIndex].desc2}</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            key={slides[currentIndex].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="image-container"
          >
            <img src={slides[currentIndex].image} alt="carousel" />
          </motion.div>
        </div>
      </div>

      {/* dot indicators */}
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)} // optional: allow click
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
