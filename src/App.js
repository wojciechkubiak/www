import React, { useEffect, useRef, useState } from "react";
import { Navbar, LandingPage, About, Contact, Skills } from "./components/Components";

import "./App.css";

const App = () => {
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



  return (
    <div className="App">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        goHome={goHome}
        goAbout={goAbout}
        goProjects={goProjects}
        goSkills={goSkills}
        goContact={goContact}
      />
      <div ref={homeRef}><LandingPage setCurrentPage={setCurrentPage}/></div>
      <div ref={aboutRef}><About setCurrentPage={setCurrentPage}/></div>
      <div ref={projectsRef}>
      <div className="projects-page">
        <h1
          className="projects-header"
        >
          PROJECTS
        </h1>
      </div>
      </div>
      <div ref={skillsRef}>
      <Skills setCurrentPage={setCurrentPage}/>
      </div>
      <div ref={contactRef}>
      <Contact setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
};

export default App;
