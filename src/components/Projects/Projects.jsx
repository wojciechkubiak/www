import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import Translations from "./../../translations/translations";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import "./Projects.css";
import Meditate from "./../../images/1.jpg";
import Animacare from "./../../images/2.jpg";
import Opqn from "./../../images/3.jpg";
import Obb from "./../../images/1w.png";
import Energe from "./../../images/2w.png";
import OpqnWeb from "./../../images/3w.png";

const Projects = (props) => {
  const [projectsType, setProjectsType] = useState("MOBILE");
  const [animated, setAnimated] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: isMobile ? 0.1 : 0.2,
  });

  let projectsRef = useRef(null);

  const swapSection = (next) => {
    const t1 = gsap.timeline();
    t1.fromTo(
      projectsRef,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setProjectsType(next);
        },
      }
    );
    t1.fromTo(projectsRef, { opacity: 0 }, { opacity: 1, duration: 1 });
    setTimeout(() => props.goProjects(), 100);
  };

  useEffect(() => {
    if (inView) {
      props.setCurrentPage("projects");
    }

    if (inView && !animated && !isMobile) {
      const t1 = gsap.timeline();

      t1.to(projectsRef, {
        opacity: 1,
        duration: 1,
        onComplete: () => setAnimated(true),
      });
    }
  }, [inView]);

  return (
    <div className="projects-page" ref={ref}>
      <h1 className="projects-header">PROJECTS</h1>
      <div className="projects-content" ref={(node) => (projectsRef = node)}>
        {projectsType === "MOBILE" && (
          <>
            <div className="projects-mobile-img-container">
              <img className="projects-mobile-img" src={Meditate} />
              <div className="projects-mobile-description">
                <h1>MEDITATE</h1>
                <p>
                  Project that supports user wellbeing through multiple
                  exercises and by creating statistics that can be later used by
                  user. Technology used by me: <strong>Flutter</strong>.
                </p>
                <div className="projects-mobile-description-icons">
                  <a href="https://www.google.com">
                    <IoLogoGooglePlaystore size={48} color="rgba(27, 27, 27)" />
                  </a>
                  <a href="https://www.apple.com">
                    <IoLogoApple size={48} color="rgba(27, 27, 27)" />
                  </a>
                </div>
              </div>
            </div>
            <div className="projects-mobile-img-container">
              <img className="projects-mobile-img" src={Animacare} />
              <div className="projects-mobile-description">
                <h1>ANIMACARE</h1>
                <p>
                  My own project I'm currently working on. Application for
                  people that love their animals and want to compare them with
                  other users, track their data and more. Technologies used by
                  me are <strong>Flutter</strong> and <strong>NodeJS</strong>{" "}
                  (including <strong>PostgreSQL</strong>
                  ).
                </p>
                <div className="projects-mobile-description-icons">
                  <a href="https://github.com/wojciechkubiak/animal_care">
                    <FaGithubSquare size={48} color="rgba(27, 27, 27)" />
                  </a>
                </div>
              </div>
            </div>
            <div className="projects-mobile-img-container">
              <img className="projects-mobile-img" src={Opqn} />
              <div className="projects-mobile-description">
                <h1>OPQN</h1>
                <p>
                  Study project that allows user to share health data with
                  dietitians made with <strong>Java</strong> and{" "}
                  <strong>NodeJS</strong> (including <strong>PostgreSQL</strong>
                  ).
                </p>
                <div className="projects-mobile-description-icons">
                  <a href="https://github.com/wojciechkubiak/opqn-mobile">
                    <FaGithubSquare size={48} color="rgba(27, 27, 27)" />
                  </a>
                  <a href="https://github.com/wojciechkubiak/opqn-api">
                    <FaGithubSquare size={48} color="rgba(27, 27, 27)" />
                  </a>
                </div>
              </div>
            </div>
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
                <a href="https://github.com/wojciechkubiak/obb-api">
                  <FaGithubSquare size={48} color="rgba(27, 27, 27)" />
                </a>
                <a href="https://github.com/wojciechkubiak/obb-web">
                  <FaGithubSquare size={48} color="rgba(27, 27, 27)" />
                </a>
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
                <a href="https://distracted-booth-ae59fb.netlify.app/">
                  <FiMonitor size={48} color="rgba(228, 228, 228)" />
                </a>
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
                <a href="https://github.com/wojciechkubiak/opqn-web">
                  <FaGithubSquare size={48} color="rgba(27, 27, 27)" />
                </a>
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
              swapSection("MOBILE");
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
              swapSection("WEB");
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
