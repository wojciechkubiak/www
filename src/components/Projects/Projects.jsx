import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import Translations from "./../../translations/translations";
import "./Projects.css";
import Meditate from "./../../images/1.jpg";
import Animacare from "./../../images/2.jpg";
import Opqn from "./../../images/3.jpg";

const Projects = (props) => {
  return (
    <div className="projects-page">
      <h1 className="projects-header">PROJECTS</h1>
      <div className="projects-content">
          <img className="projects-mobile-img" src={Meditate}/>
          <img className="projects-mobile-img" src={Animacare}/>
          <img className="projects-mobile-img" src={Opqn}/>
      </div>
      <div><h3>Mobile</h3><button>next arrow</button></div>
    </div>
  );
};

export default Projects;
