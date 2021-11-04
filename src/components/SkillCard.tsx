import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

interface ISkillCard {
  imgUrl?: string;
  header?: string;
  description?: string[];
  background?: string;
}

const Skill = styled.div`
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  width: 25%;
  min-width: 340px;
  height: 400px;
  margin: 50px;
  object-fit: cover;
  border-radius: 16px;
`;

const SkillBackground = styled.div`
  width: 100%;
  height: 300px;
  filter: grayscale(0.9);
  background-size: contain;
  background-image: ${(props: ISkillCard) => `url(${props.background})`};
  background-repeat: no-repeat;
  & > div {
    height: 300px;
  }
`;

const SkillName = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  left: 0;
  text-align: right;

  & > h1 {
    padding-right: 24px;
    padding-top: 24px;
    font-family: "Quicksand", sans-serif;
    font-size: 32px;
    color: rgba(0, 0, 0, 0.67);
  }
`;

const SkillImg = styled.div`
  position: absolute;
  bottom: 58px;
  left: 16px;
  width: 75px;
  height: 75px;
`;

const SkillDescription = styled.div`
  position: absolute;
  background-color: white;
  width: 300px;
  min-height: 200px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: rgba(50, 50, 93, 0.25) 0 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  bottom: -220px;
  z-index: 900;
  margin: auto;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.67);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 1s;
  border-radius: 20px;
`;

const SkillCard = ({ imgUrl, header, description, background }: ISkillCard) => {
  const [showDescription, setShowDescription] = useState(false);
  const theme: ISkillCard = { background };

  return (
    <Skill
      onMouseEnter={() => setShowDescription(true)}
      onMouseOver={() => setShowDescription(true)}
      onMouseOut={() => setShowDescription(false)}
    >
      <SkillBackground background={theme.background} />
      <SkillName>
        <h1>{header}</h1>
      </SkillName>
      <SkillImg>
        <img src={imgUrl} width={75} height={75} alt={header} />
      </SkillImg>
      {showDescription && (
        <SkillDescription>
          {description?.map((element) => {
            return <h3 key={uuidv4()}>{element}</h3>;
          })}
        </SkillDescription>
      )}
    </Skill>
  );
};

export default SkillCard;
