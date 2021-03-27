import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import "./About.css";

const About = (props) => {
  const [animated, setAnimated] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: isMobile ? 0.1 : 0.2,
  });

  let aboutRef = useRef(null);

  useEffect(() => {
    if (inView) {
      props.setCurrentPage("about");
    }

    if (inView && !animated && !isMobile) {
      const t1 = gsap.timeline();

      t1.to(aboutRef, { y: 50, duration: 0.2 }).to(aboutRef, {
        opacity: 1,
        duration: 1,
        y: 0,
        onComplete: () => setAnimated(true),
      });
    }
  }, [inView]);

  return (
    <div className="about-page" ref={ref}>
      <h1 className="about-header">ABOUT ME</h1>
      <div ref={r => aboutRef = r} className="about-container">
      <p className="about-intro">
        Hi! My name is <strong>Wojtek Kubiak</strong> and I'm a{" "}
        <strong>developer</strong>. In my career I had opportunity to create{" "}
        <strong>web</strong> and <strong>mobile</strong> applications, both{" "}
        <strong>client</strong> and <strong>server side</strong>.
      </p>
      <p className="about-more">
        Ok, but <strong>how it all started?</strong> <br />I used to draw a lot
        in my childhood - and I am doing that until now. Later, in high school I
        was creating building designs. There was always that one particle inside
        of me which makes me enjoy creating things. After high school fate
        wanted me to start <strong>study programming</strong>. Of course the
        first thing that caught my eye was web and mobile development. From that
        first weeks - even days - all I'm doing is thinking about what fancy
        application I could do, that would be <strong>nice looking</strong> and{" "}
        <strong>functional</strong>.
        <br />I <strong>accept</strong> various types of <strong>orders</strong>
        , I am working <strong>full time</strong> job as a{" "}
        <strong>programmer</strong> - currently{" "}
        <strong>Flutter Developer</strong>, I am allowed to earn a living doing
        what I love, what makes my eyes shine. If you want to{" "}
        <strong>hire me</strong> or <strong>give me an assignment</strong>, so I
        can share my passion with you, fill in the form at the end of the
        website or just go into one of my social medias and message me. If you
        want to get to know me better, click <strong>there</strong>.
      </p>
      </div>
    </div>
  );
};

export default About;
