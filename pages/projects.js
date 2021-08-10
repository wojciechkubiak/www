import SectionHeader from "../components/section-header";
import Wrapper from "../containers/wrapper";

import { pages } from "../utils/constants";

export default function Projects() {
  const body = (
    <>
      <SectionHeader text="PROJECTS" />
      <div style={{ height: "800px" }}></div>
    </>
  );

  return (
    <div className="projects">
      <Wrapper body={body} isTransparent={false} currentPage={pages.PROJECTS} />
    </div>
  );
}
