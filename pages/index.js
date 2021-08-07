import {useState} from "react";

import Navbar from "../containers/navbar";
import Landing from "../containers/landing";
import LandingSkills from "../containers/landing-skills";
import Footer from "../containers/footer";

export default function Home() {
  const [isTransparent, setIsTransparent] = useState(true);

  const handleTransparency = (value) => setIsTransparent(value);

  return (
    <div className="home">
      <Navbar isTransparent={isTransparent} />
      <Landing setIsTransparent={handleTransparency} />
      <LandingSkills />
      <Footer />
    </div>
  );
}
