import SectionHeader from "../components/section-header";
import Wrapper from "../containers/wrapper";

import { pages } from "../utils/constants";

export default function Skills() {
  const body = (
    <>
      <SectionHeader text="SKILLS" />
      <div style={{ height: "800px" }}></div>
    </>
  );

  return (
    <div className="skills">
      <Wrapper body={body} isTransparent={false} currentPage={pages.SKILLS} />
    </div>
  );
}
