import { useState, useEffect } from "react";
import Image from "next/image";

const SkillTile = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const style = { display: "none" };

  useEffect(() => {
    if (props.currentSkill === props.skill) setIsActive(true);
    else setIsActive(false);
  }, [props.currentSkill]);

  const skillToUpperCase = () => {
    return (
      props.skill.charAt(0).toUpperCase() + props.skill.slice(1).toLowerCase()
    );
  };

  const setSkill = () => {
    props.setSkill(props.value);
    props.setCurrentSkill(props.skill);
  }

  return (
    <div
      className="skill-tile"
      onMouseOver={() => setIsPopup(true)}
      onMouseOut={() => setIsPopup(false)}
    >
      <div className="skill-name" style={isPopup ? {} : style}>
        <p>{skillToUpperCase()}</p>
      </div>
      <Image
        onClick={() => setSkill()}
        className={
          isActive ? "skill-tile-img" : "skill-tile-img skill-tile-img-disabled"
        }
        src={props.img}
        alt=""
      />
    </div>
  );
};

export default SkillTile;
