import React, { useEffect, useState } from "react";

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
  const skillsList = [{
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
  }]

  const Tile = (img, name) => {
    const [showDescription, setShowDescription] = useState(false);
    
    return (
      <div key={`tile-${name}`} onMouseOver={() => setShowDescription(true)} onMouseOut={() => setShowDescription(false)}>
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
    <div className="skills-page">
      <h1 className="skills-header">SKILLS</h1>
      <div className="skills-tiles">
        {skillsList.map((element, index) => {
          return Tile(element.img, element.name);
        })}
      </div>
    </div>
  );
};

export default Skills;
