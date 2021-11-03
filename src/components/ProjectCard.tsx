import { IconBaseProps } from "react-icons";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export type Link = {
  img: (props: IconBaseProps) => JSX.Element;
  url: string;
};

export interface IProjectCard {
  header: string;
  img: string;
  description: string;
  links: Link[] | undefined;
  isMobile: boolean;
}

const ProjectsWebCardContainer = styled.div`
  padding-top: 60px;
  max-height: 660px;
  width: 600px;
  margin: 0 auto;
  //background-color: #33333d;

  @media only screen and (max-width: 1400px) {
    padding: 20px;
  }

  @media only screen and (max-width: 900px) {
    padding: 20px 0 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

const CardWebImage = styled.img`
  //max-height: 260px;
  max-width: 500px;
  background-color: #474747;
  padding: 5px;
  border: 5px solid #33333d;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
`;

const ProjectsWebInfo = styled.div`
  background-color: #27272f;
  position: relative;
  top: -60px;
  width: 100%;
  max-width: 600px;
  padding-top: 60px;
  padding-bottom: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  & > h1 {
    font-family: "Quicksand", sans-serif;
    font-size: 28px;
    margin-top: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.87);
  }

  & > p {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    margin-top: 12px;
    margin-bottom: 12px;
    text-align: justify;
    text-justify: inter-word;
    padding: 16px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const ProjectWebLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectsMobileCardContainer = styled.div`
  padding-top: 60px;
  max-height: 660px;
  width: 600px;
  margin: 0 auto;
  position: relative;
  //background-color: #33333d;

  @media only screen and (max-width: 1400px) {
    padding: 20px;
  }

  @media only screen and (max-width: 900px) {
    padding: 20px 0 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const CardMobileImage = styled.img`
  max-width: 260px;
  background-color: #474747;
  padding: 5px;
  border: 5px solid #33333d;
  position: relative;
  z-index: 500;
`;

const ProjectsMobileInfo = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  padding-left: 300px;
  background-color: #27272f;
  padding-top: 40px;
  padding-right: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  & > h1 {
    font-family: "Quicksand", sans-serif;
    font-size: 28px;
    text-align: center;
    color: rgba(255, 255, 255, 0.87);
  }

  & > p {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    text-align: justify;
    text-justify: inter-word;
    padding: 16px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const ProjectMobileLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`;

const ProjectCard = ({
  header,
  img,
  description,
  links,
  isMobile,
}: IProjectCard) => {
  return isMobile ? (
    <>
      <ProjectsMobileCardContainer>
        <CardMobileImage src={img} alt={header} />
        <ProjectsMobileInfo>
          <h1>{header}</h1>
          <p>{description}</p>
          <ProjectMobileLinks>
            {links?.map((element: Link) => {
              return (
                <a key={uuidv4()} href={element.url}>
                  <element.img size={42} color="white" />
                </a>
              );
            })}
          </ProjectMobileLinks>
        </ProjectsMobileInfo>
      </ProjectsMobileCardContainer>
    </>
  ) : (
    <ProjectsWebCardContainer>
      <CardWebImage src={img} alt={header} />
      <ProjectsWebInfo>
        <h1>{header}</h1>
        <p>{description}</p>
        <ProjectWebLinks>
          {links?.map((element: Link) => {
            return (
              <a key={uuidv4()} href={element.url}>
                <element.img size={42} color="white" />
              </a>
            );
          })}
        </ProjectWebLinks>
      </ProjectsWebInfo>
    </ProjectsWebCardContainer>
  );
};

export default ProjectCard;
