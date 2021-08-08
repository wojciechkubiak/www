import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import MessageIcon from "./../components/message-icon";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const Contact = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [isWrongEmail, setWrongEmail] = useState(true);
  const [isShortSubcject, setIsShortSubcject] = useState(true);
  const [isShortContent, setIsShortContent] = useState(true);
  const [isInitial, setIsInitial] = useState(true);

  const validation = (mail) => {
    if (mail.length < 5) return false;

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const check = re.test(String(mail).toLowerCase());
    return check;
  };

  const clearData = () => {
    setEmail("");
    setSubject("");
    setContent("");
  };

  const checkData = async () => {
    setWrongEmail(!validation(email));
    setIsShortSubcject(subject.length < 5);
    setIsShortContent(content.length < 10);

    return !isWrongEmail && !isShortSubcject && !isShortContent;
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    setIsClicked(true);
    setIsInitial(false);

    const mail = {
      mail: email,
      subject: subject,
      content: content,
    };

    const isProperData = await checkData();

    if (isProperData) {
      axios
        .post(`https://portolio-email-sender.herokuapp.com/`, { mail })
        .then((res) => {
          clearData();
          setIsClicked(false);
          props.handleShowForm(false);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setIsClicked(false);
  };

  return (
    <>
      {props.showForm && (
        <form className="message-form">
          <button
            className="message-close"
            onClick={() => props.handleShowForm(false)}
          >
            <FiArrowLeft size={22} />
          </button>
          <h1>Contact.</h1>
          <div className="message-form-inputs">
            <div className="message-input">
              <h4 className="message-label">Email</h4>
              <input
                className={isWrongEmail && !isInitial ? "input-error" : ""}
                disabled={isClicked}
                placeholder="your email."
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (isWrongEmail) setWrongEmail(false);
                }}
                required
              ></input>
            </div>
            <div className="message-input">
              <h4 className="message-label">Subject</h4>
              <input
                disabled={isClicked}
                className={isShortSubcject && !isInitial ? "input-error" : ""}
                placeholder="your subject."
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                  if (isShortSubcject) setIsShortSubcject(false);
                }}
                required
              ></input>
            </div>
            <div className="message-input">
              <h4 className="message-label">Message</h4>
              <textarea
                disabled={isClicked}
                className={isShortContent && !isInitial ? "input-error" : ""}
                placeholder="your message."
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                  if (isShortContent) setIsShortContent(false);
                }}
                required
              />
            </div>
          </div>
        </form>
      )}
      {props.showForm && (
        <button
          className="message-send-btn"
          onClick={(event) => sendEmail(event)}
          disabled={isClicked}
        >
          {isClicked && <ClipLoader size={36} />}
          {!isClicked && <RiSendPlaneLine size={36} />}
        </button>
      )}
      <MessageIcon setShowForm={props.handleShowForm} isForm={props.showForm} />
    </>
  );
};

export default Contact;
