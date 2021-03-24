import React, { useEffect, useRef, useState } from "react";
import { Navbar, LandingPage } from "./components/Components";

import "./App.css";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollValue);
  }, []);

  const scrollValue = () => {
    setScrollY(window.scrollY);
  };

  return (
    <div className="App">
      <Navbar scrollY={scrollY} />
      <LandingPage scrollY={scrollY} />
      <div
        className="about-page"
        style={{ padding: "80px", paddingTop: "60px" }}
      >
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontStyle: "italic",
            fontWeight: "700",
            fontSize: "84px",
            textAlign: "center",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          ABOUT ME
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "400",
            lineHeight: "30px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc eget
          lorem dolor sed viverra ipsum nunc aliquet bibendum. Pharetra magna ac
          placerat vestibulum lectus mauris ultrices eros. Justo nec ultrices
          dui sapien eget. Ante in nibh mauris cursus mattis molestie a. Sit
          amet cursus sit amet dictum sit amet justo donec. Id nibh tortor id
          aliquet lectus. Cursus in hac habitasse platea dictumst quisque. Enim
          facilisis gravida neque convallis a cras. Netus et malesuada fames ac
          turpis egestas integer eget aliquet. Scelerisque in dictum non
          consectetur a erat nam. Velit scelerisque in dictum non consectetur a
          erat nam at. Sit amet porttitor eget dolor morbi. Elementum tempus
          egestas sed sed. Cursus euismod quis viverra nibh cras pulvinar.
          Nullam non nisi est sit amet. Cursus sit amet dictum sit amet justo
          donec.
        </p>
      </div>
      <div className="projects-page">
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            padding: "40px",
            paddingTop: "82px",
            fontStyle: "italic",
            fontWeight: "700",
            fontSize: "84px",
            textAlign: "left",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          PROJECTS
        </h1>
      </div>
      <div className="skills-page">
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            padding: "40px",
            paddingTop: "82px",
            fontStyle: "italic",
            fontWeight: "700",
            fontSize: "84px",
            textAlign: "right",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          SKILLS
        </h1>
      </div>
      <div className="contact-page">
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            padding: "40px",
            paddingTop: "82px",
            fontStyle: "italic",
            fontWeight: "700",
            fontSize: "84px",
            textAlign: "center",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          HAVE A QUESTION?
        </h1>
        <input style={{marginTop: "30px", marginBottom: "50px", width: "60%", left: "20%", position: "relative", fontSize: "38px", backgroundColor: "transparent", border: "none", borderBottom: "2px solid white"}} placeholder="Email"></input>
        <input style={{marginTop: "30px", marginBottom: "50px", width: "60%", left: "20%", position: "relative", fontSize: "38px", backgroundColor: "transparent", border: "none", borderBottom: "2px solid white"}} placeholder="Subject"></input>
        <textarea style={{marginTop: "30px", marginBottom: "50px", width: "60%", left: "20%", position: "relative", fontSize: "24px", backgroundColor: "transparent", border: "none", minHeight: "200px", borderBottom: "2px solid white"}} placeholder="Your message"></textarea>
      </div>
      <div className="footer">
      </div>
    </div>
  );
};

export default App;
