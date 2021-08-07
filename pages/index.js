import { useState } from "react";

import Landing from "../containers/landing";
import LandingSkills from "../containers/landing-skills";
import Wrapper from "../containers/wrapper";
import { pages } from "./../utils/constants";

const Home = () => {
  const handleTransparency = (value) => setIsTransparent(value);
  const [isTransparent, setIsTransparent] = useState(true);

  const body = (
    <>
      <Landing setIsTransparent={handleTransparency} />
      <LandingSkills />
    </>
  );

  return (
    <div className="home">
      <Wrapper
        body={body}
        isTransparent={isTransparent}
        currentPage={pages.HOME}
      />
    </div>
  );
};

export default Home;
