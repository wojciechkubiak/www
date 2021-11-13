import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { order, skills } from "../utils/Skills";
import SectionHeader from "../components/SectionHeader";
import SkillCard from "../components/SkillCard";
import { Page } from "../context/NavigationContext";

const SkillsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 40px;
  margin-top: 40px;
  background-color: white !important;

  @media only screen and (max-width: 900px) {
    margin-bottom: 100px;
  }
`;

const Skills = () => (
  <>
    <SectionHeader text="ORDER" page={Page.SKILLS} />
    <SkillsContainer>
      {Object.entries(order).map(([key, value]) => {
        return (
          <SkillCard
            key={uuidv4()}
            imgUrl={value.img}
            header={key.toUpperCase()}
            description={value.description}
            background={value.bg}
          />
        );
      })}
    </SkillsContainer>
    <SectionHeader text="HIRE" />
    <SkillsContainer>
      {Object.entries(skills).map(([key, value]) => {
        return (
          <SkillCard
            key={uuidv4()}
            imgUrl={value.img}
            header={key.toUpperCase()}
            description={value.description}
            background={value.bg}
          />
        );
      })}
    </SkillsContainer>
  </>
);

export default Skills;
