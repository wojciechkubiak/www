import { useState } from "react";
import MessageIcon from "./../components/message-icon";
import { FiArrowLeft } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    if(!isClicked) return <RiSendPlaneLine size={42} />;

    return <ClipLoader size={60} />

  }
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
              <input placeholder="your email."></input>
            </div>
            <div className="message-input">
              <h4 className="message-label">Subject</h4>
              <input placeholder="your subject."></input>
            </div>
            <div className="message-input">
              <h4 className="message-label">Message</h4>
              <textarea placeholder="your message."/>
            </div>
          </div>
          <div className="message-send">
            <button
              className="message-send-btn"
              onClick={() => setIsClicked(true)}
              disabled={isClicked}
            >
              {clickHandler()}
            </button>
          </div>
        </form>
      )}
      <MessageIcon setShowForm={props.handleShowForm} isForm={props.showForm} />
    </>
  );
};

export default Contact;
