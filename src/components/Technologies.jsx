import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Flutter from "./../assets/img/flutter.png";
import Android from "./../assets/img/android.png";
import CSS from "./../assets/img/css.png";
import HTML from "./../assets/img/html.png";
import JS from "./../assets/img/js.png";
import MySQL from "./../assets/img/mysql.png";
import Node from "./../assets/img/node.png";
import PostgreSQL from "./../assets/img/psql.png";
import Python from "./../assets/img/py.png";
import Rc from "./../assets/img/react.png";
import gsap from "gsap";
import uuid from 'react-uuid'
import Translations from "./../translations/translations";

const TechnologiesMain = styled.div`
  padding-top: 5%;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #464689;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const TechnologiesContainer = styled.div`
  position: relative;
  left: 15%;
  width: 70%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
`;

const ImageContainer = styled.div`
  margin: 10px;
  margin-top: 80px;
  width: 240px;
`;

const Header = styled.h1`
  font-family: "Dancing Script", cursive;
  font-weight: 400;
  font-size: 24px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.7);
`;

const DescriptionContainer = styled.div`
  position: absolute;
  width: 220px;
  background-color: white;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  display: none;
  opacity: 0;
  z-index: 2000
`;

const DescriptionText = styled.p`
  color: #464689de;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  padding-bottom: 5px;
`;

const Image = styled.img`
  background-color: white;
  padding: 15px;
  border-radius: 24px;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.2);
`;

const BottomHeader = styled.h1`
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 42px;
`;

const Technologies = (props) => {
  const Skill = (img, skill, description = {}) => {
    const [show, setShow] = useState(false);
    let imgRef = useRef(null);
    let descriptionRef = useRef(null);
    useEffect(() => {
      const t1 = gsap.timeline();

      if (show) {
        t1.to(imgRef, { y: -10, duration: 0.1 }).
        to(descriptionRef, { display: "block", zIndex: 2000, duration: 0.1})
        .to(descriptionRef, { 
          opacity: 1,
          delay: 0.1,
          duration: 0.5,
        });
      }

      if (!show) {
        t1.to(imgRef, { y: 0 })
          .to(descriptionRef, { opacity: 0, duration: 0.5 })
          .to(descriptionRef, { display: "none", delay: 0.5 });
      }
    }, [show]);
    return (
      <ImageContainer key={uuid()}>
        <Image
          src={img}
          height={96}
          width={96}
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          ref={(r) => (imgRef = r)}
          onClick={() => setShow(!show)}
        />
        <Header>{skill}</Header>
        <DescriptionContainer ref={(r) => (descriptionRef = r)}>
          {description.map((element) => {
            return (
              <DescriptionText>
                {props.t(element, { framework: "react-i18next" })}
              </DescriptionText>
            );
          })}
        </DescriptionContainer>
      </ImageContainer>
    );
  };

  return (
    <TechnologiesMain>
      <TechnologiesContainer>
        {Skill(Rc, "ReactJS", Translations.Skills.React)}
        {Skill(Flutter, "Flutter", Translations.Skills.Flutter)}
        {Skill(JS, "JavaScript", Translations.Skills.JavaScript)}
        {Skill(Node, "NodeJS", Translations.Skills.NodeJS)}
        {Skill(PostgreSQL, "PostgreSQL", Translations.Skills.PostgreSQL)}
        {Skill(MySQL, "MySQL", Translations.Skills.MySQL)}
        {Skill(Python, "Python", Translations.Skills.Python)}
        {Skill(CSS, "CSS", Translations.Skills.CSS)}
        {Skill(HTML, "HTML", Translations.Skills.HTML)}
        {Skill(Android, "Android", Translations.Skills.Android)}
      </TechnologiesContainer>
      <BottomHeader>MOJE TECHNOLOGIE</BottomHeader>
    </TechnologiesMain>
  );
};

export default Technologies;
