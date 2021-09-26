import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const ProjectCard = (props) => {
  return (
    <div className="projects__card__container">
      <div className="projects__card__image">
        <Image src={props.img} priority={true} objectFit="scale-down" />
      </div>
      <h1>{props.header}</h1>
      <p>{props.description}</p>
      <div className="projects__links">
        {props.links &&
          props.links.length &&
          props.links.map((element) => {
            return (
              <a key={uuidv4()} href={element.url}>
                <element.img size={42} />
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectCard;
