import SectionHeader from "../components/SectionHeader";
import Bio from "../components/Bio";
import Career from "../components/Career";
import { Page } from "../context/NavigationContext";

const About = () => {
  return (
    <>
      <SectionHeader text="ABOUT" page={Page.ABOUT} />
      <Bio />
      <SectionHeader text="CAREER" page={Page.CAREER} />
      <Career />
    </>
  );
};

export default About;
