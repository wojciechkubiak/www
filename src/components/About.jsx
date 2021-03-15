import React from "react";
import styled from "styled-components";
import device from "../utils/devices";
import { RiDownloadCloud2Line } from "react-icons/ri";

const Download = styled.button`
  position: relative;
  width: 60%;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 18px;
  border: none;
  background-color: #5e6196;
  color: white;
  border-radius: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  @media only screen and ${device.laptopMax} {
    font-size: 11px;
    padding: 10px;
  }
`;

const AboutContainer = styled.div`
  height: 100vh;
  word-wrap: break-word;
  background-color: #383a63;
  color: white;
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;

  @media only screen and (min-width: 601px) {
    width: 400px;
  }

  @media only screen and (max-width: 600px) {
    max-width: 100vw;
    height: auto;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
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
  font-size: 16px;
  word-spacing: 6px;
  line-height: 32px;
  color: white;
  padding-top: 30px;
  font-family: "Roboto", sans-serif;
`;

const About = (props) => {
  return (
    <AboutContainer>
      <AboutHeader>{props.t("aboutme.header", { framework: "react-i18next" })}</AboutHeader>

      <Description>
      {props.t("aboutme.content", { framework: "react-i18next" })}
      </Description>
      <Download>
        <RiDownloadCloud2Line size={32} />
      </Download>
    </AboutContainer>
  );
};

export default About;
