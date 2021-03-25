import React, { useEffect, useRef, useState } from "react";
import { Navbar, LandingPage } from "./components/Components";
import { IoMdSend } from "react-icons/io";
import Loader from "react-loader-spinner";

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
            wordSpacing: "2px",
            marginBottom: "30px",
          }}
        >
          Hi! My name is <strong>Wojtek Kubiak</strong> and I'm a{" "}
          <strong>developer</strong>. In my career I had opportunity to create{" "}
          <strong>web</strong> and <strong>mobile</strong> applications, both{" "}
          <strong>client</strong> and <strong>server side</strong>.
        </p>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "400",
            lineHeight: "30px",
            wordSpacing: "2px",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          Ok, but <strong>how it all started?</strong> <br />I used to draw a
          lot in my childhood - and I am doing that until now. Later, in high
          school I was creating building designs. There was always that one
          particle inside of me which makes me enjoy creating things. After high
          school fate wanted me to start <strong>study programming</strong>. Of
          course the first thing that caught my eye was web and mobile
          development. From that first weeks - even days - all I'm doing is
          thinking about what fancy application I could do, that would be{" "}
          <strong>nice looking</strong> and <strong>functional</strong>.
          <br />I <strong>accept</strong> various types of{" "}
          <strong>orders</strong>, I am working <strong>full time</strong> job
          as a <strong>programmer</strong> - currently{" "}
          <strong>Flutter Developer</strong>, I am allowed to earn a living
          doing what I love, what makes my eyes shine. If you want to{" "}
          <strong>hire me</strong> or <strong>give me an assignment</strong>, so
          I can share my passion with you, fill in the form at the end of the
          website or just go into one of my social medias and message me. If you
          want to get to know me better, click <strong>there</strong>.
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
        <form>
          <input
            style={{
              marginTop: "30px",
              marginBottom: "50px",
              width: "60%",
              left: "20%",
              position: "relative",
              fontSize: "26px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "2px solid white",
            }}
            placeholder="Email"
          ></input>
          <input
            style={{
              marginTop: "30px",
              marginBottom: "50px",
              width: "60%",
              left: "20%",
              position: "relative",
              fontSize: "26px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "2px solid white",
            }}
            placeholder="Subject"
          ></input>
          <textarea
            style={{
              marginTop: "30px",
              marginBottom: "50px",
              width: "60%",
              left: "20%",
              position: "relative",
              fontSize: "22px",
              letterSpacing: "1px",
              backgroundColor: "transparent",
              border: "none",
              minHeight: "200px",
              borderBottom: "2px solid white",
            }}
            placeholder="Your message"
          ></textarea>
          <button
            type="submit"
            style={{
              width: "100%",
              position: "relative",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              marginBottom: "50px",
            }}
          >
            {/* <IoMdSend size={62} color="white" /> */}
            <Loader type="Grid" color="#FFFFFF" height="62" width="62" />
          </button>
        </form>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
