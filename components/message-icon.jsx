import { useState, useEffect } from "react";

import { RiMessage3Line, RiCloseLine } from "react-icons/ri";

const MessageIcon = (props) => {
  const [btnClass, setBtnClass] = useState("message-btn");

  const icon = () => {
    if (!props.isForm) {
      return <RiMessage3Line className="message-icon" size={42} />;
    }

    return <RiCloseLine className="message-icon" size={42} />;
  };

  const handleClick = () => {
    props.setShowForm();
  };

  useEffect(() => {
    !props.isForm
      ? setBtnClass("message-btn")
      : setBtnClass("message-btn message-btn-active");
 
  }, [props.isForm]);

  return (
    <button className={btnClass} onClick={() => handleClick()}>
      {icon()}
    </button>
  );
};

export default MessageIcon;
