import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import HorizontalScroll from "react-scroll-horizontal";

import backgroundMusic from "./assets/bgsound.mp3";
import Background from "./assets/bg.svg";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.css";

const AppMain = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  -webkit-overflow-scrolling: touch;
`;

const App = () => {
  const [isMusicLoaded, setMusicLoaded] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  let appRef = useRef(null);
  let audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setMusicLoaded(true);
      setPlayMusic(true);
    }, 2000);
  }, []);

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
        />
      </div>
      <audio ref={(r) => (audioRef = r)}>
        <source src={backgroundMusic}></source>
      </audio>
      <HorizontalScroll reverseScroll={true}>
        <div style={{ display: "inline-flex" }}>
          <LandingPage/>
          <div className="card">
            <h2>Projekty</h2>
          </div>
          <div className="card">
            <h2>Umiejętności</h2>
          </div>
          <div className="card">
            <h2>Kontakt</h2>
          </div>
        </div>
      </HorizontalScroll>
    </AppMain>
  );
};

export default App;
