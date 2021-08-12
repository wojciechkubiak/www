import AnimatedImage from "../components/animated-image";

import * as webData from "../public/web.json";
import * as mobileData from "../public/phone.json";
import * as drawData from "../public/draw.json";

const LandingSkills = () => {
  const options = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const webOptions = { ...options, animationData: webData };
  const mobileOptions = { ...options, animationData: mobileData };
  const drawOptions = { ...options, animationData: drawData };

  return (
    <div className="landing-skills">
      <h1 className="landing-skills-header">Skills.</h1>
      <h3 className="landing-skills-subheader">What do I feel best in.</h3>
      <div className="landing-skills-animations">
        <AnimatedImage options={webOptions} height={200} width={400} text="Web." href="/projects"/>
        <AnimatedImage options={mobileOptions} height={400} width={200} text="Mobile." href="/projects"/>
        <AnimatedImage options={drawOptions} height={260} width={260} text="Drawings." href="https://www.deviantart.com/biakku"/>
      </div>
    </div>
  );
};

export default LandingSkills;
