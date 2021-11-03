import styled, { ThemeProvider } from "styled-components";
import Background from "../assets/bg.webp";
import { useContext, useEffect, useState } from "react";
import webData from "../assets/web.json";
import mobileData from "../assets/phone.json";
import drawData from "../assets/draw.json";
import AnimatedImage, { animationOptions } from "../components/AnimatedImage";
import NavigationContext, { Page } from "../context/NavigationContext";
import { useScrollPositionNumeric } from "../hooks/UseScrollPosition";

interface Theme {
  isVisible: boolean;
}

const HomeContainer = styled.div`
  padding-top: 170px;
  max-width: 100vw;
  background: url(${Background}) no-repeat center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-bottom: 160px;
  text-align: center;
`;

const Header = styled.h1`
  color: white;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  font-size: 92px;
  text-align: center;
  margin: 0 !important;
  text-shadow: 1px 1px #6c6c6e;
  opacity: ${(props: Theme) => (props.isVisible ? "1" : "0")};
  transition: 500ms all;
`;

const Subheader = styled.h2`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 38px;
  text-align: center;
  text-shadow: 1px 1px #8e8e8f;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  outline: none !important;
  box-shadow: none !important;
  border: 3px solid white;
  padding: 10px 40px;
  font-size: 26px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  background: transparent;
  background: linear-gradient(to left, transparent 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: 1s;
  cursor: pointer;

  &:hover {
    background-position: left bottom;
    transition: 500ms;
    color: #3d8a3bcc;
  }

  @media only screen and (max-width: 1200px) {
    background-color: white;
    //color: rgba(255, 255, 255, 0.87);
  }
`;

const HomeSkills = styled.div`
  max-width: 100vw;
  background-color: white;
  margin: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 40px;
  padding-bottom: 70px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const HomeSkillsHeader = styled.h1`
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 16px;
`;

const HomeSkillsSubheader = styled.h3`
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  margin-bottom: 60px;

  @media only screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

const HomeSkillsAnimations = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Home = () => {
  const [theme, setTheme] = useState<Theme>({
    isVisible: false,
  });
  const navigationContext = useContext(NavigationContext);

  const scrollPosition = useScrollPositionNumeric();

  useEffect(() => {
    if (navigationContext.currentPage !== Page.HOME && scrollPosition < 50) {
      navigationContext.setCurrentPage(Page.HOME);
    }
  }, [navigationContext, scrollPosition]);

  useEffect(() => {
    setTheme({ isVisible: true });
  }, []);

  const webOptions = {
    ...animationOptions,
    animationData: webData,
  };
  const mobileOptions = { ...animationOptions, animationData: mobileData };
  const drawOptions = { ...animationOptions, animationData: drawData };

  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        <Header isVisible={theme.isVisible}>Flutter / Frontend</Header>
        <Subheader>developer</Subheader>
        <Button
          onClick={() => {
            if (
              navigationContext?.refs[Page.ABOUT] &&
              navigationContext.currentPage !== Page.ABOUT
            ) {
              const element: any = navigationContext?.refs[Page.ABOUT];
              const y =
                element.getBoundingClientRect().top + window.scrollY - 70;
              if (element) window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          Find out more
        </Button>
      </HomeContainer>
      <HomeSkills>
        <HomeSkillsHeader>Skills.</HomeSkillsHeader>
        <HomeSkillsSubheader>What do I feel best in.</HomeSkillsSubheader>
        <HomeSkillsAnimations>
          <AnimatedImage
            options={webOptions}
            height={200}
            width={400}
            text="Web."
          />
          <AnimatedImage
            options={mobileOptions}
            height={400}
            width={200}
            text="Mobile."
            isBorder={true}
          />
          <AnimatedImage
            options={drawOptions}
            height={260}
            width={260}
            text="Drawings."
          />
        </HomeSkillsAnimations>
      </HomeSkills>
    </ThemeProvider>
  );
};

export default Home;
