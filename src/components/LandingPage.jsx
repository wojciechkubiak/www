import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import Loader from "react-loader-spinner";
import { gsap } from "gsap";
import { MdMessage } from "react-icons/md";
import * as animationData from "../assets/astronaut.json";
import "./../App.css";

const CommunicationCloudContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #2e305cda;
  position: relative;
  min-width: 600px;
`;

const CommunicationElementsContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
`;

const Cloud = styled.div`
  position: relative;
  left: 50%;
  width: 228px;
  transform: translate(-50%, 0%);
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
`;

const LandingPage = (props) => {
  const [message, setMessage] = useState("Cześć!");
  let loadingDotsRef = useRef(null);
  let text1Ref = useRef(null);
  let buttonsRef = useRef(null);
  let containerRef = useRef(null);

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

        onComplete: () => setMessage("Nazywam się Wojtek"),
      })
      .fromTo(
        loadingDotsRef,
        { opacity: 1, duration: 1 },
        { opacity: 0, duration: 2 }
      )
      .to(text1Ref, { opacity: 1, duration: 1 })
      .to(text1Ref, { y: -80, opacity: 0, duration: 1 })
      .to(buttonsRef, { opacity: 1, y: -80, duration: 1 })
      .to(containerRef, { width: "65vw", duration: 2 });
  }, []);

  return (
    <>
      <CommunicationCloudContainer ref={(r) => (containerRef = r)}>
        <CommunicationElementsContainer>
          <Cloud>
            <MdMessage color="white" size={228} />
          </Cloud>
          <Dots ref={(r) => (loadingDotsRef = r)}>
            <Loader type="ThreeDots" color="white" height="128" width="128" />
          </Dots>
          <Text ref={(r) => (text1Ref = r)} style={{ opacity: 0 }}>
            <Message>{message}</Message>
          </Text>
          <div
            ref={(r) => (buttonsRef = r)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              opacity: 0,
              height: "300px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              Dowiedz się więcej
            </h1>
            <button
              style={{
                position: "relative",
                width: "100%",
                padding: "20px",
                fontSize: "20px",
                border: "none",
                backgroundColor: "#ff3b69",
                color: "white",
                borderRadius: "40px",
                fontFamily: "Ubuntu",
                fontWeight: "500",
              }}
            >
              O mnie
            </button>
            <button
              style={{
                position: "relative",
                width: "100%",
                padding: "20px",
                fontSize: "20px",
                border: "none",
                backgroundColor: "white",
                color: "rgba(0, 0, 0, 0.8)",
                borderRadius: "40px",
                fontFamily: "Ubuntu",
                fontWeight: "500",
              }}
            >
              Kontakt
            </button>
          </div>
        </CommunicationElementsContainer>
      </CommunicationCloudContainer>
      <div
        style={{
          height: "100vh",
          backgroundColor: "white",
          width: "37vw",
          minWidth: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Lottie
          options={animationConfig}
          height={500}
          width={500}
          isStopped={false}
          isPaused={false}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: 48,
              textAlign: "center",
              fontFamily: "Ubuntu",
              fontWeight: "600",
              color: "#464689",
            }}
          >
            WOJCIECH KUBIAK
          </h1>
          <h1
            style={{
              fontSize: 34,
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            Developer
          </h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
