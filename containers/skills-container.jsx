import Image from "next/image";
import { useState, useEffect } from "react";
import SkillTile from "../components/skill-tile";
import AnimatedImage from "../components/animated-image";
import * as gearData from "../public/gear.json";

const SkillsContainer = (props) => {
  const [skill] = useState(Object.keys(props.values)[0]);
  const [currentSkill, setCurrentSkill] = useState(skill);
  const [currentSkillValue, setCurrentSkillValue] = useState(
    props.values[skill]
  );

  const options = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animatedData: gearData,
  };

  useEffect(() => {
    const skill = Object.keys(props.values)[0];

    setCurrentSkill(skill);
    setCurrentSkillValue(props.values[skill]);
  }, [props.values]);

  return (
    <div className="skills-container">
     
      <div className="skills-tiles-container">
        {props.values &&
          Object.entries(props.values).map(([key, value]) => {
            return (
              <SkillTile
                key={`skill-${key}`}
                skill={key}
                currentSkill={currentSkill}
                setCurrentSkill={setCurrentSkill}
                setSkill={setCurrentSkillValue}
                value={value}
                img={value["img"]}
              />
            );
          })}
        <AnimatedImage options={options} height={400} width={400} />
      </div>
      <div className="skill__container">
        <Image className="skill__img" src={currentSkillValue.img}></Image>
        <h1 className="skill__header">{currentSkill.toUpperCase()}</h1>
        <div className="skill__description">
          {currentSkillValue.description.map((value) => (
            <p key={`skilldesc-${value}`} className="skill__paragraph">
              {value}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SkillsContainer;
