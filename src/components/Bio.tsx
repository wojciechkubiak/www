import AnimatedImage, { animationOptions } from "./AnimatedImage";
import { MdLocationOn, MdPerson, MdPhone } from "react-icons/md";
import { FaFacebookSquare, FaGitSquare, FaLinkedin } from "react-icons/fa";
import bioData from "../assets/bio.json";
import styled from "styled-components";

const BioContainer = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #3e3e4d;

  @media only screen and (max-width: 800px) {
    padding-top: 0 !important;
  }
`;

const BioSocial = styled.div`
  width: 30%;
  min-width: 400px;
  padding: 20px;

  @media only screen and (max-width: 800px) {
    min-width: 300px !important;
  }
`;

const BioPersonal = styled.div`
  position: relative;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #27272f;
  padding: 18px;
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  & > div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: end !important;
  }

  & > div > svg {
    color: rgba(255, 255, 255, 0.6);
  }

  & > div > h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    margin-left: 7px;
    color: rgba(255, 255, 255, 0.6);
    min-width: 160px;
    text-align: right !important;
  }

  & > div:first-child > h4 {
    color: rgba(255, 255, 255, 0.87);
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    margin-left: 4px;
  }

  & > div > p {
    margin: 0 !important;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 800px) {
    width: 96%;
    min-width: 240px;

    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3) {
      justify-content: space-between !important;
    }

    & > div {
      width: 100%;
      justify-content: center;
    }

    & > h4 {
      text-align: right !important;
    }
  }
`;

const BioMedias = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 12px;

  & > a > svg {
    margin-left: 4px;
    margin-right: 4px;
    color: rgba(255, 255, 255, 0.6) !important;
  }

  & > a:nth-child(2) > svg {
    color: #4e8661 !important;
  }

  & > a > svg:hover {
    color: #3c664a !important;
    transition: 500ms all;
  }

  @media only screen and (max-width: 800px) {
    padding-bottom: 12px;
    padding-top: 24px;
  }
`;

const BioInfo = styled.div`
  width: 35%;
  min-width: 400px;
  padding: 20px;
  background-color: #33333d;

  & > p {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 1px;
    font-family: "Montserrat", sans-serif;
    font-weight: lighter;
    text-align: justify;
    color: rgba(255, 255, 255, 0.87);
  }

  @media only screen and (max-width: 800px) {
    width: 80%;
    min-width: 300px !important;
    padding: 10px !important;
    background-color: transparent;
    padding-top: 20px !important;
  }
`;

const Bio = () => {
  const options = {
    ...animationOptions,
    animationData: bioData,
  };

  return (
    <BioContainer>
      <BioSocial>
        <AnimatedImage options={options} height={400} width={400} />
        <BioPersonal>
          <div>
            <MdPerson size={23} />
            <h4>Wojciech Kubiak</h4>
          </div>
          <div>
            <MdLocationOn size={20} />
            <h4>Wrocław, PL</h4>
          </div>
          <div>
            <MdPhone size={20} />
            <h4>+48 726823405</h4>
          </div>
          <BioMedias>
            <a href="https://www.linkedin.com/in/wojciechkubiakin">
              <FaLinkedin size={32} />
            </a>
            <a href="https://www.github.com/wojciechkubiak">
              <FaGitSquare size={32} />
            </a>
            <a href="https://www.facebook.com/wojciechkubiakfb">
              <FaFacebookSquare size={32} />
            </a>
          </BioMedias>
        </BioPersonal>
      </BioSocial>
      <BioInfo>
        <p>
          In my career I had opportunity to create <strong>web</strong> and{" "}
          <strong>mobile applications</strong>, both <strong>client</strong> and{" "}
          <strong>server side</strong>. Ok, but how it all started? I used to
          draw a lot in my childhood - and I am doing that until now. Later, in
          high school I was <strong>creating building designs</strong>. There
          was always that one particle inside of me which makes me enjoy{" "}
          <strong>creating things</strong>. After high school fate wanted me to
          start study programming. Of course the first thing that caught my eye
          was <strong>web</strong> and <strong>mobile development</strong>. From
          that first weeks - even days - all I'm doing is thinking about what
          fancy application I could do, that would be nice looking and
          functional. Currently I accept various types of orders, I am working
          full time job as a programmer -{" "}
          <strong>Mobile / Frontend Developer</strong>, which allows me to earn
          a living while doing something I feel strong with, what makes my eyes
          shine. If you want to hire me or give me an assignment, so I can share
          my passion with you, <strong>fill in the form</strong> at the end of
          the website or just go into one of my social medias and{" "}
          <strong>message me</strong>.
        </p>
      </BioInfo>
    </BioContainer>
  );
};

export default Bio;
