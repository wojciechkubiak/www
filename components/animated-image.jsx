import Link from "next/link";
import Lottie from "react-lottie";
import { useInView } from "react-intersection-observer";

const AnimatedImage = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
  });

  const wrapper = (body) => {
    if (props.href) {
      return (
        <Link href={props.href} className="landing-skills-name">
          {body}
        </Link>
      );
    }
    return body;
  };

  const body = () => {
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
        {props.text && <h2 className="landing-skills-name">{props.text}</h2>}
      </div>
    );
  };

  return <>{wrapper(body())}</>;
};

export default AnimatedImage;
