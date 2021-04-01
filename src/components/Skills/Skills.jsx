import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import Translations from "./../../translations/translations";
import "./Skills.css";
import ReactImg from "./../../images/reactb.png";
import NodeImg from "./../../images/nodeb.png";
import JavaScriptImg from "./../../images/jsb.png";
import FlutterImg from "./../../images/flutterb.png";
import PythonImg from "./../../images/pyb.png";
import SQLImg from "./../../images/psqlb.png";
import HTMLImg from "./../../images/htmlb.png";
import CSSImg from "./../../images/cssb.png";

const Skills = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState([]);

  const { ref, inView, entry } = useInView({
    threshold: isMobile ? 0.1 : 0.2,
  });

  let descriptionRef = useRef(null);

  const descriptionHandler = (show) => {
    const t1 = gsap.timeline();

    if (show) {
      setShowDescription(true);
    } else {
      setShowDescription(false);
    }
  };

  const skillsList = {
    ReactJS: {
      img: ReactImg,
      description: Translations.Skills.React,
    },
    Flutter: {
      img: FlutterImg,
      description: Translations.Skills.Flutter,
    },
    NodeJS: {
      img: NodeImg,
      description: Translations.Skills.NodeJS,
    },
    JavaScript: {
      img: JavaScriptImg,
      description: Translations.Skills.JavaScript,
    },
    Python: {
      img: PythonImg,
      description: Translations.Skills.Python,
    },
    SQL: {
      img: SQLImg,
      description: Translations.Skills.PostgreSQL,
    },
    HTML: {
      img: HTMLImg,
      description: Translations.Skills.HTML,
    },
    CSS: {
      img: CSSImg,
      description: Translations.Skills.CSS,
    },
  };

  const Tile = (img, name, index, description) => {
    const [animated, setAnimated] = useState(false);

    let contentRef = useRef(null);

    useEffect(() => {
      if (inView) {
        props.setCurrentPage("skills");
      }

      if (inView && !animated && !isMobile) {
        const t1 = gsap.timeline();

        t1.to(contentRef, {
          y: -30,
          opacity: 1,
          duration: 1,
          onComplete: () => setAnimated(true),
        }).delay(index * 0.2);
      }
    }, [inView]);

    return (
      <div
        ref={(r) => (contentRef = r)}
        key={`tile-${name}`}
        onMouseOver={() => {
          setDescription(description);
          descriptionHandler(true);
        }}
        onMouseOut={() => {
          descriptionHandler(false);
        }}
      >
        <img src={img} alt={name} />
        <h1>{name}</h1>
        {isMobile && (
          <div className="skills-tile-description-mobile">
            {description.map((element) => {
              return <p>{props.t(element, { framework: "react-i18next" })}</p>;
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="skills-page" ref={ref}>
      <h1 className="skills-header">SKILLS</h1>
      <div className="skills-tiles">
        {Object.entries(skillsList).map((value, index) => {
          return Tile(value[1].img, value[0], index, value[1].description);
        })}
      </div>
      {showDescription && !isMobile && (
        <div
          className="skills-tile-description"
          ref={(r) => (descriptionRef = r)}
        >
          {description.map((element) => {
            return <p>{props.t(element, { framework: "react-i18next" })}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Skills;
