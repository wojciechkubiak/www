import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import Translations from "./../../translations/translations";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
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
            <div>
              <img
                className="projects-web-img projects-web-img-obb"
                src={Obb}
              />
              <div
                style={{
                  minWidth: "200px",
                  padding: "40px",
                  backgroundColor: "#d4d4d4",
                  marginLeft: "-2px",
                  textAlign: "center",
                }}
              >
                <h1>OBB</h1>
                <p>
                  My engineering project for Centre of Biomedical Research made
                  with <strong>ReactJS</strong> and <strong>NodeJS</strong>{" "}
                  (including <strong>PostgreSQL</strong>).
                </p>
                <FaGithubSquare size={48} color="rgba(27, 27, 27)" />
                <FaGithubSquare size={48} color="rgba(27, 27, 27)" />
              </div>
            </div>
            <div className="projects-web-mid">
              <div
                style={{
                  minWidth: "200px",
                  padding: "40px",
                  backgroundColor: "#474747",
                  color: "white",
                  marginRight: "-2px",
                  textAlign: "center",
                }}
              >
                <h1>ENERGE</h1>
                <p>
                  Website for dutch renovating company created with{" "}
                  <strong>ReactJS</strong> and <strong>NodeJS</strong> backend.
                  It takes clients data, counts new usage values and sends them
                  to the company through ZOHO CRM.
                </p>
                <FiMonitor size={48} color="rgba(228, 228, 228)" />
                <p style={{ fontSize: "10px" }}>(no public repositories)</p>
              </div>
              <img
                className="projects-web-img projects-web-img-en"
                src={Energe}
              />
            </div>
            <div>
              <img
                className="projects-web-img projects-web-img-opqn"
                src={OpqnWeb}
              />
              <div
                style={{
                  minWidth: "200px",
                  padding: "40px",
                  backgroundColor: "#d4d4d4",
                  marginLeft: "-2px",
                  textAlign: "center",
                }}
              >
                <h1>OPQN</h1>
                <p>
                  Easy project that allows user to share health data with
                  dietitians made with <strong>ReactJS</strong> and{" "}
                  <strong>NodeJS</strong> (including <strong>PostgreSQL</strong>
                  ).
                </p>
                <FaGithubSquare size={48} color="rgba(27, 27, 27)" />
                <FaGithubSquare size={48} color="rgba(27, 27, 27)" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="projects-type-picker">
        <div className="projects-type-picker">
          <button
            disabled={projectsType === "MOBILE"}
            onClick={() => {
              setProjectsType("MOBILE");
              setTimeout(() => props.goProjects(), 100);
            }}
          >
            <ImArrowLeft
              size={42}
              color={projectsType !== "MOBILE" ? "white" : "gray"}
            />
          </button>
          <h3 className="projects-type-header">{projectsType}</h3>
          <button
            disabled={projectsType !== "MOBILE"}
            onClick={() => {
              setProjectsType("WEB");
              setTimeout(() => props.goProjects(), 100);
            }}
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
