import { RiMessage3Line, RiCloseLine } from "react-icons/ri";

const MessageIcon = (props) => {
  const icon = () => {
    if (!props.isForm) {
      return <RiMessage3Line className="message-icon" size={42} />;
    }

    return <RiCloseLine className="message-icon" size={42} />;
  };

  return (
    <button className="message-btn" onClick={() => props.setShowForm()}>
      {icon()}
    </button>
  );
};

export default MessageIcon;
