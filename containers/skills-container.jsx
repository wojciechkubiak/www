import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SkillsContainer = (props) => {
  const width = useWidth();

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={width > 1000 ? 3 : 1}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onActiveIndexChange={(slider) => console.log(slider.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.values &&
          Object.entries(props.values).map(([key, value]) => {
            return (
              <SwiperSlide>
                <div className="skill__container">
                  <Image className="skill__img" src={value.img}></Image>
                  <h1 className="skill__header">{key.toUpperCase()}</h1>
                  <div className="skill__description">
                    {value.description.map((v) => (
                      <p key={`skilldesc-${v}`} className="skill__paragraph">
                        {v}
                      </p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        <p className="swipe__tip">Swipe for more</p>
      </Swiper>
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

export default SkillsContainer;
