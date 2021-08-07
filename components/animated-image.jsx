import Lottie from "react-lottie";
import { useInView } from "react-intersection-observer";

const AnimatedImage = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
  });

  return (
    <div className="lottie-main" ref={ref}>
      <div className="lottie-container">
        <Lottie
          options={props.options}
          height={props.height}
          width={props.width}
          isStopped={false}
          isPaused={!inView}
        />
      </div>
      <h2 className="landing-skills-name">{props.text}</h2>
    </div>
  );
};

export default AnimatedImage;
