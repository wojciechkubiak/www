import { useState } from "react";
import SectionHeader from "../components/section-header";
import Wrapper from "../containers/wrapper";
import { skills, order } from "../utils/skills";
import { pages } from "../utils/constants";

import SkillsContainer from "../containers/skills-container";

export default function Skills() {
  const body = (
    <>
      <SectionHeader text="ORDER" />
      <SkillsContainer values={order} />
      <SectionHeader text="HIRE" />
      <SkillsContainer values={skills} />
    </>
  );

  return (
    <div className="skills">
      <Wrapper body={body} isTransparent={false} currentPage={pages.SKILLS} />
    </div>
  );
}
