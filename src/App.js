import React, { useEffect, useRef, useState } from "react";
import { Navbar, LandingPage, About, Contact, Skills } from "./components/Components";
import { withTranslation } from "react-i18next";

import "./App.css";

const App = (props) => {
  const { t, i18n } = props;

  const [currentPage, setCurrentPage] = useState("home");
  const [lang, setLang] = useState("en");

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
        t={t}
      />
      <div ref={homeRef}><LandingPage setCurrentPage={setCurrentPage} t={t}/></div>
      <div ref={aboutRef}><About setCurrentPage={setCurrentPage} t={t}/></div>
      <div ref={projectsRef}>
      <div className="projects-page">
        <h1
          className="projects-header"
        >
          PROJECTS
        </h1>
      </div>
      </div>
      <div ref={skillsRef} t={t}>
      <Skills setCurrentPage={setCurrentPage} t={t}/>
      </div>
      <div ref={contactRef}>
      <Contact setCurrentPage={setCurrentPage} t={t}/>
      </div>
    </div>
  );
};

export default withTranslation("common")(App);
