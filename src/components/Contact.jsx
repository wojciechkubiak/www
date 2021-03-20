import React, { useState, useEffect, useRef } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import axios from "axios";
import { gsap } from "gsap";
import styled from "styled-components";
import {
  FaLinkedin,
  FaGitSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Lottie from "react-lottie";
import * as animationData from "../assets/rocket.json";

const ContactContainer = styled.div`
  background-color: #5e6196;
  position: relative;
  padding: 50px !important;
  width: 70%;
  left: 50%;
  transform: translate(-50%, 0%);
  border-radius: 40px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 600px) {
    width: auto;
    max-width: 100vw;
    justify-content: center;
    padding: 5px;
    border-radius: 0px;
    margin-top: 30px;
    margin-bottom: 10px;
    padding: 20px !important;
    border-radius: 20px;
  }
`;

const ContactMain = styled.div`
  background-color: white;
  position: relative;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (max-height: 600px) {
    min-height: 1280px;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    width: auto;
    max-width: 100vw;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const Input = styled.input`
  margin-top: 10px !important;
  margin-bottom: 20px !important;
  width: 100%;
  border: none !important;
  border-radius: 10px;
  font-size: 20px;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Roboto", sans-serif;

  &:focus {
    border: none !important;
    outline: none !important;
  }
`;

const TextArea = styled.textarea`
  margin-top: 20px !important;
  width: 100%;
  border: none !important;
  border-radius: 10px;
  font-size: 20px;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  height: 200px !important;
  font-family: "Roboto", sans-serif;

  &:focus {
    border: none !important;
    outline: none !important;
  }
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  display-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 100px;
  outline: none;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 42px;
  color: rgba(0, 0, 0, 0.7);
`;

const SubHeader = styled.h1`
  text-align: center;
  font-size: 28px;
  font-family: "Dancing Script", cursive;

  color: rgba(0, 0, 0, 0.7);
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
`;

const Label = styled.p`
  font-size: 18px;
  color: white;
  padding-left: 24px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
`;

const LottieContainer = styled.div`
  position: relative;
  @media only screen and (max-width: 600px) {
    position: relative;
    transform: scale(0.85);
  }
`;

const ContactBody = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: white;

  @media only screen and (max-width: 600px) {
    // flex
  }
`;

const Contact = (props) => {
  const [showSend, setShowSend] = useState(true);
  const [send, setSend] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [animated, setAnimated] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [alreadySend, setAlreadySend] = useState(false);

  let contactSubHeader = useRef(null);
  let contactForm = useRef(null);
  let animRef = useRef(null);

  const animationConfig = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const clearData = () => {
    setEmail("");
    setSubject("");
    setContent("");
  };

  const animShip = (ref) => {
    const t1 = gsap.timeline();

    if (!alreadySend) {
      console.log("Ship starts moving");
      t1.to(ref, {
        y: -3000,
        duration: 3,
        onComplete: () => setAlreadySend(true),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputDisabled(true);

    const mail = {
      mail: email,
      subject: subject,
      content: content,
    };

    axios
      .post(`https://portolio-email-sender.herokuapp.com/`, { mail })
      .then((res) => {
        // animShip(animRef);
        clearData();
        setInputDisabled(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContactBody>
      <LottieContainer ref={(r) => (animRef = r)}>
        <Lottie
          options={animationConfig}
          height={850}
          width={600}
          isStopped={false}
          isPaused={false}
        />
      </LottieContainer>
      <ContactMain>
        <div>
          <Header>
            {props.t("contact.box", { framework: "react-i18next" })}
          </Header>
          <SubHeader ref={(e) => (contactSubHeader = e)}>
            {props.t("contact.firstLine", { framework: "react-i18next" })}
          </SubHeader>
        </div>
        <ContactContainer>
          <div></div>
          <form
            ref={(e) => (contactForm = e)}
            onSubmit={(event) => handleSubmit(event)}
          >
            {!send && (
              <>
                <Links>
                  <a href="https://www.linkedin.com/in/wojciechkubiakin">
                    <FaLinkedin color="white" size={42} />
                  </a>
                  <a href="https://www.github.com/wojciechkubiak">
                    <FaGitSquare color="white" size={42} />
                  </a>
                  <a href="https://www.facebook.com/wojciechkubiakfb">
                    <FaFacebookSquare color="white" size={42} />
                  </a>
                  <a href="https://www.instagram.com/biaqe/">
                    <FaInstagramSquare color="white" size={42} />
                  </a>
                </Links>
                <figure>
                  <Label>
                    {props.t("contact.mail", { framework: "react-i18next" })}
                  </Label>
                  <Input
                    type="text"
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    value={email}
                    disabled={inputDisabled || send}
                    required
                  />
                </figure>
                <figure>
                  <Label>
                    {props.t("contact.subject", { framework: "react-i18next" })}
                  </Label>
                  <Input
                    type="text"
                    onChange={(event) => setSubject(event.target.value)}
                    type="text"
                    value={subject}
                    disabled={send}
                    required
                  />
                </figure>
                <figure>
                  <Label>
                    {props.t("contact.message", { framework: "react-i18next" })}
                  </Label>
                  <TextArea
                    type="text"
                    onChange={(event) => setContent(event.target.value)}
                    value={content}
                    disabled={send}
                    required
                  ></TextArea>
                </figure>
              </>
            )}

            <button
              style={{
                width: "100%",
                border: "none",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "20px",
                paddingTop: "24px",
              }}
              type="submit"
            >
              SEND
            </button>
          </form>
        </ContactContainer>
      </ContactMain>
    </ContactBody>
  );
};

export default Contact;
