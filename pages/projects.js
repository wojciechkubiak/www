import SectionHeader from "../components/section-header";
import ProjectsContainer from "../containers/projects-container";
import Wrapper from "../containers/wrapper";

import { pages } from "../utils/constants";
import { mobile, web } from "../utils/projects";

export default function Projects() {
  const body = (
    <>
      <SectionHeader text="WEB PROJECTS" />
      <ProjectsContainer values={web} />
      <SectionHeader text="MOBILE PROJECTS" />
      <ProjectsContainer values={mobile} isMobile={true} />
    </>
  );

  return (
    <div className="projects">
      <Wrapper body={body} isTransparent={false} currentPage={pages.PROJECTS} />
    </div>
  );
}
