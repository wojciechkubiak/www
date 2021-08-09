import SectionHeader from "../components/section-header";
import Wrapper from "../containers/wrapper";
import Bio from "../containers/about";

import { pages } from "../utils/constants";

export default function About() {
  const body = (
    <>
      <SectionHeader text="ABOUT" />
      <Bio />
      <SectionHeader text="CAREER" />
      <div style={{ height: "300px" }}></div>
    </>
  );

  return (
    <div className="about">
      <Wrapper body={body} isTransparent={false} currentPage={pages.ABOUT} />
    </div>
  );
}
