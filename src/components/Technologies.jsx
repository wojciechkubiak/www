import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Flutter from "./../assets/img/flutter.png";
import CSS from "./../assets/img/css.png";
import HTML from "./../assets/img/html.png";
import JS from "./../assets/img/js.png";
import MySQL from "./../assets/img/mysql.png";
import Node from "./../assets/img/node.png";
import PostgreSQL from "./../assets/img/psql.png";
import Python from "./../assets/img/py.png";
import Rc from "./../assets/img/react.png";
import gsap from "gsap";
import uuid from "react-uuid";
import Translations from "./../translations/translations";

const TechnologiesMain = styled.div`
  min-height: 100vh;
  background: rgb(78,78,163);
  background: linear-gradient(180deg, rgba(78,78,163,1) 0%, rgba(134,134,191,1) 100%);
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const TechnologiesContainer = styled.div`
  position: relative;
  left: 10%;
  width: 80%;
  margin-top: 25px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    width: 98%;
    left: 1%;
  }
`;

const ImageContainer = styled.div`
  margin: 10px;
  margin-top: 20px;
  width: 60px;
`;

const Image = styled.img`
  padding: 5px;
`;

const DescriptionContainer = styled.div`
  background-color: white;
  padding: 50px;
  padding-top: 20px;
  margin-top: 50px;
  min-height: 600px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  width: 400px;

  @media only screen and (max-width: 600px) {
    padding: 20px;
    padding-top: 20px;
    padding-bottom: 40px;
    border-radius: 20px;
  }
`;

const Header = styled.h1`
  text-align: center;
  font-size: 42px;
  color: rgba(255, 255, 255, 0.9);
`;

const Description = styled.p`
  color: rgba(0, 0, 0, 0.67);
  font-size: 20px;
  margin-top: 50px;
  line-height: 30px;
`;

const DescriptionImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const DescriptionHeader = styled.h1`
  font-family: "Dancing Script", cursive;
  color: rgba(0, 0, 0, 0.7);
`;

const Technologies = (props) => {
  const [option, setOption] = useState("fe");

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const active = {
    backgroundColor: "#5e6196",
    color: "white",
    boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.2)",
  };

  const frontend = [Rc, Flutter, JS, CSS, HTML];
  const backend = [Node, Python];
  const databases = [MySQL, PostgreSQL];

  const Skill = (img) => {
    return (
      <ImageContainer key={uuid()}>
        <Image src={img} height={42} width={42} />
      </ImageContainer>
    );
  };

  const Desc = (data, type, description) => {
    return (
      <DescriptionContainer>
        <DescriptionHeader>{type}</DescriptionHeader>
        <DescriptionImages>
          {data.map((skill) => Skill(skill))}
        </DescriptionImages>
        <Description>{description}</Description>
      </DescriptionContainer>
    );
  };

  return (
    <TechnologiesMain>
      <Header>MOJE TECHNOLOGIE</Header>
      <TechnologiesContainer>
        {Desc(frontend, "Frontend", lorem)}
        {Desc(backend, "Backend", lorem)}
        {Desc(databases, "DBMS", lorem)}
      </TechnologiesContainer>
    </TechnologiesMain>
  );
};

export default Technologies;
