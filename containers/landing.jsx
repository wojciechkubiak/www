import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const headers = ["WEB.", "MOBILE."];

const Landing = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  const [index, setIndex] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentHeader, setCurrentHeader] = useState(headers[0]);
  const [headerStyle, setHeaderStyle] = useState("landing-header");

  useEffect(() => {
    props.setIsTransparent(inView);
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setHeaderStyle("landing-header landing-header-opacity");

      setTimeout(() => {
        indexHandler();
        setHeaderStyle("landing-header");
      }, 1000);

      setTimeout(() => {
        setIsAnimated(!isAnimated);
      }, 2000);
    }, 1000);
  }, [isAnimated]);

  const indexHandler = () => {
    if (index === headers.length - 1) {
      setIndex(0);
      headerHandler(0);
    } else {
      const idx = index + 1;
      setIndex(idx);
      headerHandler(idx);
    }
  };

  const headerHandler = (index) => {
    setCurrentHeader(headers[index]);
  };

  return (
    <div className="landing" ref={ref}>
      <h1 className={headerStyle}>{currentHeader}</h1>
      <h2 className="landing-subheader">developer</h2>
      <button className="landing-btn">Find out more</button>
    </div>
  );
};

export default Landing;
