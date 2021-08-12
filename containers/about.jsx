import { useState } from "react";

import AnimatedImage from "../components/animated-image";
import { MdPerson, MdLocationOn, MdPhone } from "react-icons/md";
import { FaLinkedin, FaFacebookSquare, FaGitSquare } from "react-icons/fa";

import * as bioData from "../public/bio.json";

const CLASS_NOT_ACTIVE = "bio-btn";
const CLASS_ACTIVE = "bio-btn bio-btn-text-color";

const Bio = (props) => {
  const [btnClass, setBtnClass] = useState(CLASS_NOT_ACTIVE);

  const options = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: bioData,
  };

  return (
    <>
      <div className="bio">
        <div className="bio-social">
          <AnimatedImage options={options} height={400} width={400} />
          <div className="bio-personal">
            <div>
              <MdPerson size={23} />
              <h4>Wojciech Kubiak</h4>
            </div>
            <div>
              <MdLocationOn size={20} />
              <h4>Wrocław, PL</h4>
            </div>
            <div>
              <MdPhone size={20} />
              <h4>+48 726823405</h4>
            </div>
            <div className="social-medias">
              <a href="https://www.linkedin.com/in/wojciechkubiakin">
                <FaLinkedin size={32} />
              </a>
              <a href="https://www.github.com/wojciechkubiak">
                <FaGitSquare size={32} />
              </a>
              <a href="https://www.facebook.com/wojciechkubiakfb">
                <FaFacebookSquare size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="bio-info">
          <p>
            In my career I had opportunity to create <strong>web</strong> and{" "}
            <strong>mobile applications</strong>, both <strong>client</strong>{" "}
            and <strong>server side</strong>. Ok, but how it all started? I used
            to draw a lot in my childhood - and I am doing that until now.
            Later, in high school I was{" "}
            <strong>creating building designs</strong>. There was always that
            one particle inside of me which makes me enjoy{" "}
            <strong>creating things</strong>. After high school fate wanted me
            to start study programming. Of course the first thing that caught my
            eye was <strong>web</strong> and <strong>mobile development</strong>
            . From that first weeks - even days - all I'm doing is thinking
            about what fancy application I could do, that would be nice looking
            and functional. Currently I accept various types of orders, I am
            working full time job as a programmer -{" "}
            <strong>Mobile / Frontend Developer</strong>, which allows me to
            earn a living while doing something I feel strong with, what makes
            my eyes shine. If you want to hire me or give me an assignment, so I
            can share my passion with you, <strong>fill in the form</strong> at
            the end of the website or just go into one of my social medias and{" "}
            <strong>message me</strong>.
          </p>
        </div>
      </div>
      <button
        className={btnClass}
        onMouseOver={() => setBtnClass(CLASS_ACTIVE)}
        onMouseOut={() => setBtnClass(CLASS_NOT_ACTIVE)}
      >
        My resume
      </button>{" "}
    </>
  );
};

export default Bio;
