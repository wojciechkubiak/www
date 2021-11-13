import XBerry from "./../assets/xberry.png";
import ACN from "./../assets/acn.png";
import Bm from "./../assets/bm.png";
import Oak from "./../assets/oak.png";
import styled from "styled-components";

const CareerContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 62px;
  padding-bottom: 62px;
`;

const Line = styled.div`
  position: absolute;
  width: 49.5%;
  border-right: 5px solid rgba(0, 0, 0, 0.3);
  height: 95%;
`;

const CardRight = styled.div`
  position: relative;
  min-width: 500px;
  width: 30%;
  left: 50%;
  transform: translateX(-20%);
  padding: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  border-radius: 12px;
  margin-top: 42px;
  display: flex;
  flex-wrap: wrap-reverse !important;
  justify-content: space-evenly;
  align-items: center;

  & > div:nth-child(1) {
    width: 60%;
    min-width: 320px;
  }

  & > div > h2 {
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.87);
  }

  & > div > h3 {
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.67);
  }

  & > div > h4 {
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.67);
  }

  & > div > h5 {
    font-family: "Quicksand", sans-serif;
    font-size: 12px;
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.67);
  }

  & > div > p {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.67);
    line-height: 24px;
  }

  & > div > div {
    width: 140px !important;
    height: 140px !important;
  }

  @media only screen and (max-width: 1500px) {
    min-width: 500px;
  }

  @media only screen and (max-width: 1200px) {
    text-align: center;
    min-width: 400px;
  }

  @media only screen and (max-width: 800px) {
    transform: translateX(-50%);
    text-align: center;
    min-width: 300px;
  }
`;

const CardLeft = styled.div`
  position: relative;
  min-width: 500px;
  width: 30%;
  left: 50%;
  transform: translateX(-80%);
  padding: 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  margin-top: 42px;
  border-radius: 12px;
  text-align: end;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  & > div:nth-child(2) {
    width: 60%;
    min-width: 320px;
  }

  & > div > h2 {
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.87);
  }

  & > div > h3 {
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.67);
  }

  & > div > h4 {
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.67);
  }

  & > div > h5 {
    font-family: "Quicksand", sans-serif;
    font-size: 12px;
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.67);
  }

  & > div > p {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.67);
    line-height: 24px;
  }

  & > div > div {
    width: 140px !important;
    height: 140px !important;
  }

  @media only screen and (max-width: 1500px) {
    min-width: 500px;
  }

  @media only screen and (max-width: 1200px) {
    text-align: center;
    min-width: 400px;
  }

  @media only screen and (max-width: 800px) {
    transform: translateX(-50%);
    text-align: center;
    min-width: 300px;
  }
`;

const Image = styled.img`
  width: 100px !important;
  height: 100px !important;
  min-width: auto !important;
  min-height: auto !important;
  transition: 500ms all;
`;

const Career = () => (
  <CareerContainer>
    <Line />
    <CardRight>
      <div>
        <h2>Flutter / Frontend Developer</h2>
        <h3>xBerry R&D</h3>
        <h4>Full-time</h4>
        <h5>(Feb 2021 - now.)</h5>
        <p>
          As Flutter Dev I was working on both views and logic of meditation
          app. I have implemented and modified external packages, worked with
          BLoC architecture, implemented tests, handled offline (local database)
          and created my own media player. As frontend developer I had an
          opportunity to create and improve multiple web applications using
          ReactJS and NextJS, with both Javascript and Typescript.
        </p>
      </div>
      <Image src={XBerry} alt="xberry" />
    </CardRight>
    <CardLeft>
      <Image src={ACN} alt="acn" />
      <div>
        <h2>IT Intern / Application Support</h2>
        <h3>ACN</h3>
        <h4>Full-time</h4>
        <h5>(Jul 2020 - Feb 2021)</h5>
        <p>
          I have created multiple automation scripts and websites, including
          both client side and REST APIs. Also created one desktop application
          using ElectronJS.
        </p>
      </div>
    </CardLeft>
    <CardRight>
      <div>
        <h2>Database Developer</h2>
        <h3>Biomedical Research Center</h3>
        <h4>Internship</h4>
        <h5>(Jul 2020 - Sep 2020)</h5>
        <p>
          I was creating web application for the vet using modern JavaScript
          technologies. App is continued as my engineering project and is
          already tested in the Biomedical Research Center.
        </p>
      </div>
      <Image src={Bm} alt="bm" />
    </CardRight>
    <CardLeft>
      <Image src={Oak} alt="oak" />
      <div>
        <h2>Java Developer</h2>
        <h3>OAK Fusion</h3>
        <h4>Apprenticeship</h4>
        <h5>(Jul 2019 - Feb 2019)</h5>
        <p>
          The main assumption of the practice was the opportunity to learn
          advanced Java concepts and unit tests, combined with smooth
          acclimatization in the already developed project. The whole took place
          in a simulated SCRUM system.
        </p>
      </div>
    </CardLeft>
  </CareerContainer>
);

export default Career;
