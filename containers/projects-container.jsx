import { useState, useEffect } from "react";
import ProjectCard from "../components/project-card";
import { Swiper, SwiperSlide } from "swiper/react";
import NavigationButton from "../components/navigation-button";
import { v4 as uuidv4 } from "uuid";

const ProjectsContainer = (props) => {
  const [swipe, setSwipe] = useState({});
  const showNavigation =
    (props.isMobile && Object.keys(props.values).length > 3) ||
    (!props.isMobile && Object.keys(props.values).length > 2);

  const width = useWidth();

  return (
    <div className="skills__cards__container">
      {showNavigation && (
        <NavigationButton isBack={true} onClick={() => swipe.slidePrev()} />
      )}
      <Swiper
        spaceBetween={100}
        slidesPerView={width > 1422 ? (props.isMobile ? 3 : 2) : 1}
        loop={false}
        onInit={(handler) => setSwipe(handler)}
      >
        {props.values &&
          Object.entries(props.values).map(([key, value]) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <ProjectCard
                  key={uuidv4()}
                  header={key.toUpperCase()}
                  img={value.img}
                  description={value.description}
                  links={value.links}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      {showNavigation && (
        <NavigationButton isBack={false} onClick={() => swipe.slideNext()} />
      )}
      <p className="swipe__info">(swipe for more)</p>
    </div>
  );
};

const useWidth = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    if (!width) {
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
};

export default ProjectsContainer;
