import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styled from "styled-components";
import projects from "../utils/Projects";
import useWidth from "../hooks/UseWidth";
import { v4 as uuidv4 } from "uuid";
import ProjectCard, { IProjectCard } from "../components/ProjectCard";
import NavigationButton from "../components/NavigationButton";
import { Page } from "../context/NavigationContext";

const ProjectsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 40px;
  padding-top: 40px;
  background-color: #3e3e4d;

  @media only screen and (max-width: 900px) {
    padding-bottom: 100px;
  }
`;

const SwipperInfo = styled.p`
  color: rgba(255, 255, 255, 0.67);
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
`;

const Projects = () => {
  const width = useWidth() || 0;

  const [swipe, setSwipe] = useState<any>();
  const [showPrev, setShowPrev] = useState<boolean>(false);
  const [showNext, setShowNext] = useState<boolean>(true);

  return (
    <>
      <SectionHeader text="PROJECTS" page={Page.PROJECTS} />
      <ProjectsContainer>
        {showPrev && (
          <NavigationButton onClick={() => swipe?.slidePrev()} isBack={true} />
        )}
        <Swiper
          slidesPerView={width > 1352 ? 2 : 1}
          loop={false}
          onBeforeInit={(swipper) => setSwipe(swipper)}
          onActiveIndexChange={(slider) => {
            const l = projects?.length || 0;
            setShowPrev(slider.activeIndex !== 0);
            if (width <= 1122) {
              setShowNext(slider.activeIndex + 1 !== l);
            } else {
              setShowNext(slider.activeIndex + 2 !== l);
            }
          }}
        >
          {projects?.map((value: IProjectCard) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <ProjectCard
                  key={uuidv4()}
                  header={value.header}
                  img={value.img}
                  description={value.description}
                  links={value.links}
                  isMobile={value.isMobile}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {showNext && (
          <NavigationButton onClick={() => swipe?.slideNext()} isBack={false} />
        )}
        <SwipperInfo>Click or swipe for more</SwipperInfo>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
