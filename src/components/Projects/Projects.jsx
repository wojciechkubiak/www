import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import Translations from "./../../translations/translations";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import "./Projects.css";
import Meditate from "./../../images/1.jpg";
import Animacare from "./../../images/2.jpg";
import Opqn from "./../../images/3.jpg";
import Obb from "./../../images/1w.png";
import Energe from "./../../images/2w.png";
import OpqnWeb from "./../../images/3w.png";

const Projects = (props) => {
  const [projectsType, setProjectsType] = useState("MOBILE");

  return (
    <div className="projects-page">
      <h1 className="projects-header">PROJECTS</h1>
      <div className="projects-content">
        {projectsType === "MOBILE" && (
          <>
            <img className="projects-mobile-img" src={Meditate} />
            <img className="projects-mobile-img" src={Animacare} />
            <img className="projects-mobile-img" src={Opqn} />
          </>
        )}
        {projectsType !== "MOBILE" && (
          <div className="projects-web">
            <img className="projects-web-img projects-web-img-obb" src={Obb} />
            <img
              className="projects-web-img projects-web-img-opqn"
              src={OpqnWeb}
            /> 
            <img
              className="projects-web-img projects-web-img-en"
              src={Energe}
            />
          </div>
        )}
      </div>
      <div className="projects-type-picker">
        <div className="projects-type-picker">
          <button
            disabled={projectsType === "MOBILE"}
            onClick={() => setProjectsType("MOBILE")}
          >
            <ImArrowLeft
              size={42}
              color={projectsType !== "MOBILE" ? "white" : "gray"}
            />
          </button>
          <h3 className="projects-type-header">{projectsType}</h3>
          <button
            disabled={projectsType !== "MOBILE"}
            onClick={() => setProjectsType("WEB")}
          >
            <ImArrowRight
              size={42}
              color={projectsType === "MOBILE" ? "white" : "gray"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
