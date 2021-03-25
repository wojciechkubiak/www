import React, { useEffect, useRef, useState } from "react";
import { Navbar, LandingPage, About, Contact } from "./components/Components";

import "./App.css";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");

  let homeRef = useRef(null);
  let aboutRef = useRef(null);
  let projectsRef = useRef(null);
  let skillsRef = useRef(null);
  let contactRef = useRef(null);

  const smooth = { behavior: "smooth", block: "start", inline: "nearest" };

  const goHome = () => homeRef.current.scrollIntoView(smooth);
  const goAbout = () => aboutRef.current.scrollIntoView(smooth);
  const goProjects = () => projectsRef.current.scrollIntoView(smooth);
  const goSkills = () => skillsRef.current.scrollIntoView(smooth);
  const goContact = () => contactRef.current.scrollIntoView(smooth);

  useEffect(() => {
    window.addEventListener("scroll", scrollValue);
  }, []);

  const scrollValue = () => {
    setScrollY(window.scrollY);
  };

  return (
    <div className="App">
      <Navbar
        scrollY={scrollY}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        goHome={goHome}
        goAbout={goAbout}
        goProjects={goProjects}
        goSkills={goSkills}
        goContact={goContact}
      />
      <div ref={homeRef}><LandingPage scrollY={scrollY} /></div>
      <div ref={aboutRef}><About/></div>
      <div ref={projectsRef}>

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
      </div>
      <div ref={skillsRef}>
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
      </div>
      <div ref={contactRef}>
      <Contact/>
      </div>
    </div>
  );
};

export default App;
