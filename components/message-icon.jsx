import { useState } from "react";

import { RiMessage3Line, RiCloseLine } from "react-icons/ri";

const MessageIcon = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [btnClass, setBtnClass] = useState("message-btn");

  const icon = () => {
    if (!props.isForm) {
      return <RiMessage3Line className="message-icon" size={42} />;
    }

    return <RiCloseLine className="message-icon" size={42} />;
  };

  const handleClick = () => {
    props.setShowForm();

    isClicked
      ? setBtnClass("message-btn")
      : setBtnClass("message-btn message-btn-active");

    setIsClicked(!isClicked);
  };

  return (
    <button className={btnClass} onClick={() => handleClick()}>
      {icon()}
    </button>
  );
};

export default MessageIcon;
