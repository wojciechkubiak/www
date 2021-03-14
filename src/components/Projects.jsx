import React from "react";
import styled from "styled-components";
import ObbSys from "./../assets/obbsys.png";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  height: 100vh;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  border-left: 1px solid #383a6355;
  border-right: 1px solid #383a6355;

  @media only screen and (max-height: 600px) {
    min-height: 1280px
  }
`;

const MobileImgContainer = styled.div`
  width: 300px;
  height: 500px;
  position: relative;
  overflow: hidden;
`;

const WebImgContainer = styled.div`
  width: 500px;
  height: 300px;
  position: relative;
  overflow: hidden;
  //   border-radius: 50%;
`;

const ProjectText = styled.h1`
  margin-top: 50px;
  
  text-align: center;
  //   color: white;
`;

const ProjectType = styled.h1`
  font-family: "Dancing Script", cursive;
  text-align: center;
  //   color: white;
`;

const Image = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`;

const Projects = (props) => {
  const ProjectCard = ({
    name,
    type,
    description,
    img,
    backgroundColor,
    textColor,
  }) => {
    return (
      <Card
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        {type.toLowerCase() === "mobile" && (
          <MobileImgContainer>
            <Image className="projects-card-img" src={img}></Image>
          </MobileImgContainer>
        )}
        {type.toLowerCase() !== "mobile" && (
          <WebImgContainer>
            <Image className="projects-card-img" src={img}></Image>
          </WebImgContainer>
        )}
        <ProjectText style={{ color: textColor }}>{name}</ProjectText>
        <ProjectType style={{ color: textColor }}>{type}</ProjectType>
      </Card>
    );
  };

  return (
    <ProjectsContainer>
      {ProjectCard({
        name: "TESTOWA NAZWA",
        type: "Web",
        description: "",
        img: ObbSys,
        backgroundColor: "white",
        textColor: "rgba(0, 0, 0, 0.8)"
      })}
      {ProjectCard({
        name: "TESTOWA NAZWA",
        type: "Web",
        description: "",
        img: ObbSys,
        backgroundColor: "white",
        textColor: "rgba(0, 0, 0, 0.8)",
      })}
     {ProjectCard({
        name: "TESTOWA NAZWA",
        type: "Mobile",
        description: "",
        img: ObbSys,
        backgroundColor: "white",
        textColor: "rgba(0, 0, 0, 0.8)",
      })}
       {ProjectCard({
        name: "TESTOWA NAZWA",
        type: "Mobile",
        description: "",
        img: ObbSys,
        backgroundColor: "white",
        textColor: "rgba(0, 0, 0, 0.8)",
      })}
      {ProjectCard({
        name: "TESTOWA NAZWA",
        type: "Mobile",
        description: "",
        img: ObbSys,
        backgroundColor: "white",
        textColor: "rgba(0, 0, 0, 0.8)",
      })}
    </ProjectsContainer>
  );
};

export default Projects;
