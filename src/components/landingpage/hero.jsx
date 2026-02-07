import { useState, useEffect } from "react";

import ParentingGuideCard from "../carouselcards/ParentingGuideCard";
import CollaborationCard from "../carouselcards/CollaborationCard";
import TrackingCard from "../carouselcards/TrackingCard";
import CommunityCard from "../carouselcards/CommunityCard";

function Hero() {

  const slides = [
    <ParentingGuideCard />,
    <CollaborationCard />,
    <TrackingCard />,
    <CommunityCard />
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000); // change slide every 6 seconds

    return () => clearInterval(interval);

  }, []);

  /* MANUAL CONTROLS */
  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const styles = {

    wrapper: {
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      position: "relative"
    },

    slider: {
      display: "flex",
      height: "100%",
      width: `${slides.length * 100}%`,
      transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
      transition: "transform 0.8s ease-in-out"
    },

    slide: {
      width: `${100 / slides.length}%`,
      flexShrink: 0
    },

    navButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: "rgba(255,255,255,0.2)",
      border: "none",
      color: "white",
      fontSize: "28px",
      padding: "12px 18px",
      cursor: "pointer",
      borderRadius: "50%",
      backdropFilter: "blur(6px)",
      zIndex: 20
    },

    leftBtn: {
      left: "20px"
    },

    rightBtn: {
      right: "20px"
    }

  };

  return (

    <div style={styles.wrapper}>

      <div style={styles.slider}>

        {slides.map((Slide, index) => (

          <div key={index} style={styles.slide}>
            {Slide}
          </div>

        ))}

      </div>

      {/* PREVIOUS BUTTON */}
      <button
        style={{...styles.navButton, ...styles.leftBtn}}
        onClick={prevSlide}
      >
        ‹
      </button>

      {/* NEXT BUTTON */}
      <button
        style={{...styles.navButton, ...styles.rightBtn}}
        onClick={nextSlide}
      >
        ›
      </button>

    </div>
  );
}

export default Hero;
