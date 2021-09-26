import SkillCard from "../components/skill-card";
import { v4 as uuidv4 } from "uuid";

const SkillsContainer = (props) => {
  return (
    <div className="skills__cards__container">
      {props.values &&
        Object.entries(props.values).map(([key, value]) => {
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
    </div>
  );
};

export default SkillsContainer;
