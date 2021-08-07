import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Landing = props => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    props.setIsTransparent(inView);
  }, [inView]);

  return (
    <div className="landing">
      <h1 className="landing-header" ref={ref}>MOBILE.</h1>
      <h2 className="landing-subheader">developer</h2>
      <button className="landing-btn">Find out more</button>
    </div>
  );
};

export default Landing;
