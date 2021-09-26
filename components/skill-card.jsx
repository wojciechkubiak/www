import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SkillCard = (props) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="skill__card"
      onMouseEnter={() => setShowDescription(true)}
      onMouseOver={() => setShowDescription(true)}
      onMouseOut={() => setShowDescription(false)}
    >
      <div className="skill__card__background">
        <Image src={props.background} priority={true} objectFit="cover" />
      </div>
      <div className="skill__card__name">
        <h1>{props.header}</h1>
      </div>
      <div className="skill__card__img">
        <Image src={props.imgUrl} width={75} height={75} priority={true} />
      </div>
      {showDescription && (
        <div className="skill__card__description">
          {props.description &&
            props.description.map((element) => {
              return <h3 key={uuidv4()}>{element}</h3>;
            })}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
