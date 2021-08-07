import Lottie from "react-lottie";

const AnimatedImage = (props) => (
  <div className="lottie-main">
    <div className="lottie-container">
      <Lottie
        options={props.options}
        height={props.height}
        width={props.width}
        isStopped={false}
        isPaused={false}
      />
    </div>
    <h2 className="landing-skills-name">{props.text}</h2>
  </div>
);

export default AnimatedImage;
