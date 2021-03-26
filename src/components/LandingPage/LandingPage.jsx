import React, { useEffect, useRef, useState } from "react";

import "./LandingPage.css";

const LandingPage = (props) => {
  const [scrollY, setScrollY] = useState(0);

  let parallax0 = useRef(null);
  let parallax1 = useRef(null);
  let parallax2 = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollValue);
  }, []);

  useEffect(() => {
    const value = scrollY;
    if (value > 0 && value < 2560) {
      parallax0.style.top = `${value * 0.1}px`;
      parallax1.style.bottom = `${-100 + value * 0.1}px`;
      parallax2.style.bottom = `${-150 + value * 0.08}px`;
    }
  }, [scrollY]);

  const scrollValue = () => {
    setScrollY(window.scrollY);
  };

  return (
    <div className="landing-page">
      <div ref={(r) => (parallax0 = r)} className="landing-page-parallax-0">
        <h1>Your Dev</h1>
        <h2>Your Future</h2>
      </div>
      <div
        ref={(r) => (parallax1 = r)}
        className="landing-page-parallax-1"
      ></div>
      <div
        ref={(r) => (parallax2 = r)}
        className="landing-page-parallax-2"
      ></div>
    </div>
  );
};

export default LandingPage;