import { useState, useEffect } from "react";
import { skills } from "../utils/skills";
import SkillTile from "../components/skill-tile";

const SkillsContainer = () => {
  const [currentSkill, setCurrentSkill] = useState("flutter");

  useEffect(() => {
    console.log(skills);
  }, []);

  return <div className="skills-container">
    <div className="skills-tiles-container">
    {skills &&
      Object.entries(skills).map(([key, value]) => {
        return (
          <SkillTile
            skill={key}
            currentSkill={currentSkill}
            setCurrentSkill={setCurrentSkill}
            img={value["img"]}
          />
        );
      })}
    </div>
  </div>;
};

export default SkillsContainer;
