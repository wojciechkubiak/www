import MessageIcon from "./../components/message-icon";
import { FiArrowLeft } from "react-icons/fi";

const Contact = (props) => {
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
            <input placeholder="test"></input>
          </div>
        </form>
      )}
      <MessageIcon setShowForm={props.handleShowForm} isForm={props.showForm} />
    </>
  );
};

export default Contact;
