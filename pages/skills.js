import SectionHeader from "../components/section-header";
import Wrapper from "../containers/wrapper";
import SkillTile from "../components/skill-tile";
import { pages } from "../utils/constants";

import Flutter from "../public/flutter.png";
import SkillsContainer from "../containers/skills-container";

export default function Skills() {
  const body = (
    <>
      <SectionHeader text="SKILLS" />
      <SkillsContainer />
    </>
  );

  return (
    <div className="skills">
      <Wrapper body={body} isTransparent={false} currentPage={pages.SKILLS} />
    </div>
  );
}
