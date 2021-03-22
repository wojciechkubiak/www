import React from "react";
import styled from "styled-components";
import device from "../utils/devices";
import { RiDownloadCloud2Line } from "react-icons/ri";
import resumePL from "../assets/docs/WojciechKubiakCV_PL.pdf";
import resumeEN from "../assets/docs/WojciechKubiakCV_EN.pdf";

const Download = styled.button`
  position: relative;
  left: 80%;
  width: 300px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  border: none;
  background-color: white;
  color: white;
  border-radius: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);

  @media only screen and ${device.laptopMax} {
    font-size: 11px;
    padding: 10px;
  }

  @media only screen and (max-width: 600px) {
    left: 0%;
  }
`;

const AboutContainer = styled.div`
  position: relative;
  word-wrap: break-word;
  background: rgb(70,70,137);
  background: linear-gradient(180deg, rgba(70,70,137,1) 0%, rgba(92,92,170,1) 100%);
  color: white;
  padding: 50px;
  padding-left: 240px;
  padding-right: 240px;
  margin-top: -20px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  z-index: 1000;

  @media only screen and (max-width: 600px) {
    max-width: 100vw;
    height: auto;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 50px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    margin-top: 0px;
    z-index: 0;
    border-radius: 0px;
  }
`;

const AboutHeader = styled.h1`
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 800;
`;

const Description = styled.p`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 20px;
  word-spacing: 6px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 30px;
  font-family: "Roboto", sans-serif;
`;

const About = (props) => {
  return (
    <AboutContainer>
      <AboutHeader>
        {props.t("aboutme.header", { framework: "react-i18next" })}
      </AboutHeader>

      <Description>
        {props.t("aboutme.content", { framework: "react-i18next" })}
      </Description>
      <a
        href={props.lang === "pl" ? resumePL : resumeEN}
        download={`WojciechKubiakCV_${props.lang}`}
      >
        <Download>
          <RiDownloadCloud2Line size={32} color="#5e6196" />
        </Download>
      </a>
    </AboutContainer>
  );
};

export default About;
