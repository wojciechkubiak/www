import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import HorizontalScroll from "react-scroll-horizontal";
import backgroundMusic from "./assets/bgsound.mp3";
import Background from "./assets/bg.svg";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
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
    overflow-y: scroll;
    min-height: 1120px;
  }
`;

const ComponentsContainer = styled.div`
  display: inline-flex;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

const App = (props) => {
  const { t, i18n } = props;

  const [isMusicLoaded, setMusicLoaded] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  let appRef = useRef(null);
  let audioRef = useRef(null);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setTimeout(() => {
      setMusicLoaded(true);
      setPlayMusic(true);
    }, 2000);
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
        />
      </div>
      <audio ref={(r) => (audioRef = r)}>
        <source src={backgroundMusic}></source>
      </audio>
      {!isMobile && (
        <HorizontalScroll reverseScroll={true}>
          <ComponentsContainer>
            <LandingPage />
            <About t={t} />
            <Projects />
            <div style={{ backgroundColor: "#292930", minWidth: "101vw" }}>
              <h2>Umiejętności</h2>
            </div>
            <Contact t={t} />
          </ComponentsContainer>
        </HorizontalScroll>
      )}
      {isMobile && (
        <ComponentsContainer>
          <LandingPage />
          <About t={t} />
          <Projects />
          <div style={{ backgroundColor: "#292930", minWidth: "101vw" }}>
            <h2>Umiejętności</h2>
          </div>
          <Contact t={t} />
        </ComponentsContainer>
      )}
    </AppMain>
  );
};

export default withTranslation("common")(App);
