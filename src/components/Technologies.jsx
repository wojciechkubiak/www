import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Flutter from "./../assets/img/flutterb.png";
import Android from "./../assets/img/android.png";
import CSS from "./../assets/img/cssb.png";
import HTML from "./../assets/img/htmlb.png";
import JS from "./../assets/img/jsb.png";
import MySQL from "./../assets/img/mysqlb.png";
import Node from "./../assets/img/nodeb.png";
import PostgreSQL from "./../assets/img/psqlb.png";
import Python from "./../assets/img/pyb.png";
import Rc from "./../assets/img/reactb.png";
import gsap from "gsap";
import uuid from "react-uuid";
import Translations from "./../translations/translations";

const TechnologiesMain = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;

const TechnologiesContainer = styled.div`
  position: relative;
  left: 15%;
  width: 70%;
  margin-top: 25px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

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

const Option = styled.h1`
  color: rgba(0, 0, 0, 0.7);
  font-size: 26px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  min-width: 200px;
  outline: none;
  font-family: "Lato", sans-serif;
  font-weight: 600;
`;

const DescriptionContainer = styled.div`
  background-color: #5e6196;
  padding: 50px;
  padding-top: 20px;
  margin-top: 50px;
  min-height: 300px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 40px;

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
  color: rgba(0, 0, 0, 0.7);
`;

const Description = styled.p`
  color: white;
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

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
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

  const Desc = (data, description) => {
    return (
      <DescriptionContainer>
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
        <OptionsContainer>
          <Option
            style={option === "fe" ? active : {}}
            onClick={() => setOption("fe")}
          >
            Frontend
          </Option>
          <Option
            style={option === "be" ? active : {}}
            onClick={() => setOption("be")}
          >
            Backend
          </Option>
          <Option
            style={option === "db" ? active : {}}
            onClick={() => setOption("db")}
          >
            Bazy danych
          </Option>
        </OptionsContainer>

        {option === "fe" && Desc(frontend, lorem)}
        {option === "be" && Desc(backend, lorem)}
        {option === "db" && Desc(databases, lorem)}
      </TechnologiesContainer>
    </TechnologiesMain>
  );
};

export default Technologies;
