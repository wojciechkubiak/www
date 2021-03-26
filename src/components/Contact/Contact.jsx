import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Loader from "react-loader-spinner";
import axios from "axios";
import gsap from "gsap";

import "./Contact.css";

const Contact = (props) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [mailSend, setMailSend] = useState(false);
  const [animated, setAnimated] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: isMobile ? 0.1 : 0.4,
  });

  let contactRef = useRef(null);
  let mailSendRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline();

    if (mailSend) {
      t1.to(mailSendRef, { display: "block" })
        .to(mailSendRef, { y: -300, opacity: 1, scale: 1.2, duration: 1 })
        .to(mailSendRef, { opacity: 0, duration: 1 })
        .to(mailSendRef, {
          y: 0,
          scale: 1,
          display: "none",
          onComplete: () => setMailSend(false),
        });
    }
  }, [mailSend]);

  useEffect(() => {
    if (inView) {
      props.setCurrentPage("contact");
    }

    if (inView && !animated && !isMobile) {
      const t1 = gsap.timeline();

      t1.to(contactRef, { y: 50, duration: 0.2 }).to(contactRef, {
        opacity: 1,
        duration: 1,
        y: 0,
        onComplete: () => setAnimated(true),
      });
    }
  }, [inView]);

  const clearData = () => {
    setEmail("");
    setSubject("");
    setContent("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputDisabled(true);

    const mail = {
      mail: email,
      subject: subject,
      content: content,
    };

    axios
      .post(`https://portolio-email-sender.herokuapp.com/`, { mail })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        clearData();
        setInputDisabled(false);
        setMailSend(true);
      })
      .catch((error) => {
        console.log(error);
        setInputDisabled(false);
      });
  };

  return (
    <div className="contact-page" ref={ref}>
      <h1 className="contact-header">HAVE A QUESTION?</h1>
      <div className="contact-content" ref={(r) => (contactRef = r)}>
        <div className="contact-data">
          <div>
            <span>
              <ImLocation size={28} color="white" />
              <h1>ADDRESS</h1>
            </span>
            <p>
              Wroclaw, <strong>Poland</strong>
            </p>
          </div>
          <div>
            <span>
              <FaPhoneAlt size={28} color="white" />
              <h1>LETS TALK</h1>
            </span>
            <p>
              <strong>+48</strong> 726823405
            </p>
          </div>
          <div>
            <span>
              <GrMail size={28} color="white" />
              <h1>EMAIL</h1>
            </span>
            <a href="mailto:wgkubiak@gmail.com">wgkubiak@gmail.com</a>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            className="contact-input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={inputDisabled}
            required
          ></input>
          <input
            className="contact-input"
            placeholder="Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            disabled={inputDisabled}
            required
          ></input>
          <textarea
            className="contact-textarea"
            placeholder="Your message"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            disabled={inputDisabled}
            required
          ></textarea>
          <button type="submit" className="contact-btn">
            {!inputDisabled && <RiSendPlaneFill size={62} color="white" />}
            {inputDisabled && (
              <Loader type="Grid" color="#FFFFFF" height="62" width="62" />
            )}
          </button>
        </form>
      </div>
      <div ref={(r) => (mailSendRef = r)} className="contact-popup">
        <IoMdCheckmarkCircleOutline size={64} color="white" />
        <h1 className="contact-send-text">MAIL SEND</h1>
      </div>
    </div>
  );
};

export default Contact;
