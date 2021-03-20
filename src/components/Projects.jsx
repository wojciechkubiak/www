import React, { useState, useRef } from "react";
import styled from "styled-components";
import ObbSys from "./../assets/obbsys.png";
import Animacare from "./../assets/animacare_1.jpg";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import Lottie from "react-lottie";
import * as animationData from "../assets/lotties/space.json";

const ProjectsMain = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  padding-top: 50px;
  position: relative;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding-top: 10px;
  }
`;

const ProjectsContainer = styled.div`
  position: relative;
  height: 100%;
  width: 60%;
  min-width: 900px;
  left: 20%;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    left: 0%;
    margin-top: 100px;
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div``;

const ProjectsBody = styled.div`
  min-width: calc(100% - 84px);
  position: relative;
  min-height: 800px;

  @media only screen and (max-width: 600px) {
    min-width: 100vw;
    width: 100vw;
  }
`;

const Image = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  bottom: 280px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.4);
  max-height: 466px;
  max-width: 920px;

  @media only screen and (max-width: 600px) {
    position: relative;
    max-height: auto;
    max-width: 512px;
    width: auto;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    box-shadow: none;

    & > img {
      position: relative;
      left: 50%;
      transform: translate(-50%);
      max-width: 90vw;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.4);
    }
  }
`;

const Description = styled.div`
  width: 100%;
  min-height: 320px;
  position: absolute;
  border-radius: 20px;
  bottom: -50px;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.7);
  font-family: "Roboto", sans-serif;

  @media only screen and (max-width: 600px) {
    position: relative;
    max-width: 80vw;
    width: auto;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    padding: 40px
    font-size: 16px;
    
    & > p {
      font-size: 12px;
    }
  }
`;

const DescriptionHeader = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 42px;
  margin-top: 12px;
  margin-bottom: 12px;
  color: rgba(0, 0, 0, 0.7);

  @media only screen and (max-width: 600px) {
    margin-top: 24px;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  position: relative;
  top: 50%;
  translate: transformY(-50%);
  z-index: 400;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const LottieContainer = styled.div`
  position: absolute;
  height: 1028px;
  width: 1028px;
  top: 0;
  right: 0;
`;

const DescriptionParagraph = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Projects = (props) => {
  const [index, setIndex] = useState(0);

  const animationConfig = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let projectsRef = useRef(null);

  const projects = [
    {
      image: ObbSys,
      header: "ObbSys",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: Animacare,
      header: "Animacare",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: Animacare,
      header: "Meditate",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: Animacare,
      header: "Opqn",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const nextProject = () => {
    if (index === projects.length - 1) {
      setIndex(0);
      return;
    }

    setIndex(index + 1);
  };

  const prevProject = () => {
    if (index === 0) {
      setIndex(projects.length - 1);
      return;
    }

    setIndex(index - 1);
  };

  const animate = (func) => {
    const t1 = gsap.timeline();
    t1.to(projectsRef, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => func(),
    }).to(projectsRef, { opacity: 1, duration: 0.5, delay: 0.5 });
  };

  return (
    <ProjectsMain>
      {!isMobile && (
        <LottieContainer>
          <Lottie
            options={animationConfig}
            height={850}
            width={850}
            isStopped={false}
            isPaused={false}
          />
        </LottieContainer>
      )}
      <ProjectsContainer>
        <ButtonContainer>
          <Button>
            <FaArrowLeft
              size={42}
              color="#5e6196"
              onClick={() => animate(prevProject)}
            />
          </Button>
        </ButtonContainer>
        <ProjectsBody ref={(r) => (projectsRef = r)}>
          <Image onClick={() => animate(nextProject)}>
            <img className="projects-card-img" src={projects[index].image} />
          </Image>
          <Description>
            {isMobile && <p>(click to see next project)</p>}
            <DescriptionHeader>{projects[index].header}</DescriptionHeader>
            <DescriptionParagraph>{projects[index].desc}</DescriptionParagraph>
          </Description>
        </ProjectsBody>
        <ButtonContainer>
          <Button>
            <FaArrowRight
              size={42}
              color="#5e6196"
              onClick={() => animate(nextProject)}
            />
          </Button>
        </ButtonContainer>
      </ProjectsContainer>
    </ProjectsMain>
  );
};

export default Projects;
