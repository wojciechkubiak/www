import Lottie from "react-lottie";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface IAnimatedImage {
  onClick?: () => void;
  text?: string;
  height: number;
  width: number;
  options: any;
  isBorder?: boolean;
}

interface Theme {
  isBorder: boolean;
}

const Wrapper = styled.div`
  margin: 0 !important;
  text-align: center;
  color: rgba(0, 0, 0, 0.67);
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
`;

const LottieMain = styled.div`
  cursor: pointer !important;

  border-left: ${(props: Theme) =>
    props.isBorder ? "2px solid rgba(0, 0, 0, 0.2)" : "none"};
  border-right: ${(props: Theme) =>
    props.isBorder ? "2px solid rgba(0, 0, 0, 0.2)" : "none"};
  padding-left: ${(props: Theme) => (props.isBorder ? "50px" : "0")};
  padding-right: ${(props: Theme) => (props.isBorder ? "50px" : "0")};

  @media only screen and (max-width: 700px) {
    border-left: none !important;
    border-right: none !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;

const LottieContainer = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  & > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 700px) {
    max-width: 100vw;
    height: 300px;
    width: 300px;

    & > div {
      max-width: 100vw;
      height: 300px;
      width: 300px;
    }

    & > div > svg {
      width: 80% !important;
      height: 80% !important;
      left: 50% !important;
      top: 50% !important;
      transform: translate3d(-50%, -50%, 0px) !important;
      position: absolute !important;
    }
  }
`;

export const animationOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const AnimatedImage = ({
  onClick,
  isBorder,
  options,
  height,
  width,
  text,
}: IAnimatedImage) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <Wrapper onClick={onClick}>
      <LottieMain ref={ref} isBorder={isBorder || false}>
        <LottieContainer>
          <Lottie
            isClickToPauseDisabled={true}
            options={options}
            height={height}
            width={width}
            isStopped={false}
            isPaused={!inView}
          />
        </LottieContainer>
        {text && <h2 className="landing-skills-name">{text}</h2>}
      </LottieMain>
    </Wrapper>
  );
};

export default AnimatedImage;
