import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
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
  const { ref, inView, entry } = useInView({
    threshold: isMobile ? 0.1 : 0.4,
  });

  const skillsList = [
    {
      img: ReactImg,
      name: "ReactJS",
      description: ["Test", "test", "Test"],
    },
    {
      img: FlutterImg,
      name: "Flutter",
      description: ["Test", "test", "Test"],
    },
    {
      img: NodeImg,
      name: "NodeJS",
      description: ["Test", "test", "Test"],
    },
    {
      img: JavaScriptImg,
      name: "JavaScript",
      description: ["Test", "test", "Test"],
    },
    {
      img: PythonImg,
      name: "Python",
      description: ["Test", "test", "Test"],
    },
    {
      img: SQLImg,
      name: "SQL",
      description: ["Test", "test", "Test"],
    },
    {
      img: HTMLImg,
      name: "HTML",
      description: ["Test", "test", "Test"],
    },
    {
      img: CSSImg,
      name: "CSS",
      description: ["Test", "test", "Test"],
    },
  ];

  const Tile = (img, name, index) => {
    const [showDescription, setShowDescription] = useState(false);
    const [animated, setAnimated] = useState(false);

    let contentRef = useRef(null);

    useEffect(() => {
      if (inView) {
        props.setCurrentPage("skills");
      }

      if (inView && !animated && !isMobile) {
        const t1 = gsap.timeline();

        t1.to(contentRef, { y: -30, opacity: 1, duration: 1, onComplete: () => setAnimated(true)}).delay(index * 0.2);
      }
    }, [inView]);

    return (
      <div
        ref={r => contentRef = r}
        key={`tile-${name}`}
        onMouseOver={() => setShowDescription(true)}
        onMouseOut={() => setShowDescription(false)}
      >
        <img src={img} alt={name} />
        <h1>{name}</h1>
        {showDescription && (
          <div className="skills-tile-description">
            <p>Description</p>
            <p>Description</p>
            <p>Description</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="skills-page" ref={ref}>
      <h1 className="skills-header">SKILLS</h1>
      <div className="skills-tiles" >
        {skillsList.map((element, index) => {
          return Tile(element.img, element.name, index);
        })}
      </div>
    </div>
  );
};

export default Skills;
