import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import Loader from "react-loader-spinner";
import { gsap } from "gsap";
import { MdMessage } from "react-icons/md";
import * as animationData from "../assets/astronaut.json";
import device from "../utils/devices";
import "./../App.css";

const CommunicationCloudContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #2e305cda;
  position: relative;
  min-width: 600px;

  @media only screen and (max-height: 600px) {
    min-height: 1280px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
    visibility: hidden;
  }
`;

const CommunicationElementsContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;

  @media only screen and ${device.laptopMax} {
    width: 197px;
  }
`;

const Cloud = styled.div`
  position: relative;
  left: 50%;
  width: 328px;
  transform: translate(-50%, 0%);
  font-family: "Roboto", sans-serif;
`;

const Dots = styled.div`
  position: relative;
  left: 50%;
  width: 128px;
  transform: translate(-50%, 0%);
`;

const Text = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 16px;
  border-radius: 40px;
`;

const Message = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  font-family: "Lato", sans-serif;
  font-weight: 800;
`;

const GetToKnowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  opacity: 0;
  height: 300px;

  @media only screen and ${device.laptopMax} {
    height: 128px;
  }
`;

const GetToKnowHeader = styled.h1`
  text-align: center;
  color: white;
  font-family: "Dancing Script", cursive;
  @media only screen and ${device.laptopMax} {
    font-size: 16px;
  }
`;

const GetToKnowBtn = styled.button`
  position: relative;
  width: 100%;
  padding: 20px;
  font-size: 20px;
  border: none;
  color: white;
  border-radius: 40px;
  font-family: "Roboto", sans-serif;

  @media only screen and ${device.laptopMax} {
    font-size: 11px;
    padding: 10px;
  }
`;

const NameContainer = styled.div`
  height: 100vh;
  background-color: white;
  min-width: 37vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (max-height: 600px) {
    min-height: 1280px;
  }

  @media only screen and (max-width: 600px) {
    max-width: 100vw;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const NameSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-size: 48px;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: #464689;
`;

const Role = styled.h1`
  font-size: 34px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: rgba(0, 0, 0, 0.6);
`;

const LottieContainer = styled.div`
  @media only screen and (max-width: 600px) {
    position: relative;
    transform: scale(0.85) ;
  }
`;

const LandingPage = (props) => {
  const [message, setMessage] = useState("Cześć!");
  let loadingDotsRef = useRef(null);
  let text1Ref = useRef(null);
  let buttonsRef = useRef(null);
  let containerRef = useRef(null);
  let cloudRef = useRef(null);

  const animationConfig = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.to(loadingDotsRef, { opacity: 0, duration: 1, delay: 1 })
      .fromTo(text1Ref, { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(text1Ref, {
        opacity: 0,
        duration: 1,
        y: -80,
        delay: 1,
        onComplete: () => setMessage("Nazywam się Wojtek"),
      })
      .to(text1Ref, { y: 0 })
      .fromTo(
        loadingDotsRef,
        { opacity: 1, duration: 1 },
        { opacity: 0, duration: 2 }
      )
      .to(text1Ref, { opacity: 1, duration: 1 })
      .to(text1Ref, { opacity: 0, duration: 1, y: -80, delay: 1 })
      .to(buttonsRef, { opacity: 1, y: -80, duration: 1 })
      .to(containerRef, { width: "65vw", duration: 2 })
      .to(cloudRef, { scale: 0.8, duration: 1 });
  }, []);

  return (
    <>
      <CommunicationCloudContainer ref={(r) => (containerRef = r)}>
        <CommunicationElementsContainer>
          <Cloud ref={(r) => (cloudRef = r)}>
            <MdMessage color="white" size={328} />
          </Cloud>
          <Dots ref={(r) => (loadingDotsRef = r)}>
            <Loader type="ThreeDots" color="white" height="128" width="128" />
          </Dots>
          <Text ref={(r) => (text1Ref = r)} style={{ opacity: 0 }}>
            <Message>{message}</Message>
          </Text>
          <GetToKnowContainer ref={(r) => (buttonsRef = r)}>
            <GetToKnowHeader>Dowiedz się więcej</GetToKnowHeader>
            <GetToKnowBtn
              style={{
                backgroundColor: "#5e6196",
                color: "white",
              }}
            >
              O mnie
            </GetToKnowBtn>
            <GetToKnowBtn
              style={{
                backgroundColor: "white",
                color: "rgba(0, 0, 0, 0.8)",
              }}
            >
              Kontakt
            </GetToKnowBtn>
          </GetToKnowContainer>
        </CommunicationElementsContainer>
      </CommunicationCloudContainer>
      <NameContainer>
        <LottieContainer>
          <Lottie
            options={animationConfig}
            height={400}
            width={400}
            isStopped={false}
            isPaused={false}
          />
        </LottieContainer>
        <NameSubcontainer style={{}}>
          <Name>WOJCIECH KUBIAK</Name>
          <Role>Developer</Role>
        </NameSubcontainer>
      </NameContainer>
    </>
  );
};

export default LandingPage;
