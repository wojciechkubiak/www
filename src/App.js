import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import HorizontalScroll from "react-scroll-horizontal";
import backgroundMusic from "./assets/bgsound.mp3";
import Background from "./assets/astronaut.svg";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

import "./App.css";
import devices from "./utils/devices";

const AppMain = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  -webkit-overflow-scrolling: touch;

  @media only screen and (max-height: 800px) {
    overflow-x: hidden;
    overflow-y: hidden;
    min-height: 1120px;
  }

  @media only screen and (max-width: 600px) {
    overflow-x: hidden;
    overflow-y: hidden;
    height: auto;
    background-image: none;
  }
`;

const ComponentsContainer = styled.div`
  display: inline-flex;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

const App = (props) => {
  const { t, i18n } = props;

  const [isMusicLoaded, setMusicLoaded] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  let appRef = useRef(null);
  let audioRef = useRef(null);
  let homeRef = useRef(null);
  let projectsRef = useRef(null);
  let skillsRef = useRef(null);
  let contactRef = useRef(null);

  const smooth = { behavior: "smooth", block: "start", inline: "nearest" };

  const [lang, setLang] = useState("en");

  const goHome = () => homeRef.current.scrollIntoView(smooth);
  const goProjects = () => projectsRef.current.scrollIntoView(smooth);
  const goSkills = () => skillsRef.current.scrollIntoView(smooth);
  const goContact = () => contactRef.current.scrollIntoView(smooth);

  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => {
        setMusicLoaded(true);
        setPlayMusic(true);
      }, 2000);
    }
  }, []);

  const langHandler = () => {
    if (lang === "en") {
      setLang("pl");
    } else {
      setLang("en");
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  useEffect(() => {
    playMusic ? audioRef.play() : audioRef.pause();
  }, [playMusic]);

  return (
    <AppMain ref={(r) => (appRef = r)}>
      <div>
        <Navbar
          setPlayMusic={setPlayMusic}
          playMusic={playMusic}
          isMusicLoaded={isMusicLoaded}
          langHandler={langHandler}
          lang={lang}
          goHome={goHome}
          goProjects={goProjects}
          goSkills={goSkills}
          goContact={goContact}
        />
      </div>
      <audio ref={(r) => (audioRef = r)}>
        <source src={backgroundMusic}></source>
      </audio>
      <ComponentsContainer>
        <div ref={homeRef}>
          <LandingPage t={t} lang={lang} goContact={goContact}/>
        </div>
        {isMobile && <About t={t} />}
        <div ref={projectsRef}>
          <Projects t={t} />
        </div>
        <div ref={skillsRef}>
          <Technologies t={t} />
        </div>
        <div ref={contactRef}>
          <Contact t={t} lang={lang} />
        </div>
      </ComponentsContainer>
    </AppMain>
  );
};

export default withTranslation("common")(App);
