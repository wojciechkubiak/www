import SectionHeader from "../components/section-header";
import Wrapper from "../containers/wrapper";
import Bio from "../containers/about";
import Career from "../containers/career";

import { pages } from "../utils/constants";

export default function About() {
  const body = (
    <>
      <SectionHeader text="ABOUT" />
      <Bio />
      <SectionHeader text="CAREER" />
      <Career />
    </>
  );

  return (
    <div className="about">
      <Wrapper body={body} isTransparent={false} currentPage={pages.ABOUT} />
    </div>
  );
}
