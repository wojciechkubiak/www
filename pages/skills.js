import { useState } from "react";
import SectionHeader from "../components/section-header";
import Wrapper from "../containers/wrapper";
import Switch from "../components/switch";
import { skills, order } from "../utils/skills";
import { pages } from "../utils/constants";

import SkillsContainer from "../containers/skills-container";

export default function Skills() {
  const [isClicked, setIsClicked] = useState(false);
  const [current, setCurrent] = useState(skills);

  const currentHandler = () => {
    isClicked ? setCurrent(skills) : setCurrent(order);
    setIsClicked(!isClicked);
  };

  const body = (
    <>
      <SectionHeader text="SKILLS" />
      <Switch handler={currentHandler} value={isClicked} />
      <SkillsContainer values={current} />
    </>
  );

  return (
    <div className="skills">
      <Wrapper body={body} isTransparent={false} currentPage={pages.SKILLS} />
    </div>
  );
}
