import { useState, useEffect } from "react";

const Switch = (props) => {
  const [isActive, setIsActive] = useState("disabled");

  useEffect(() => {
    props.value ? setIsActive("active") : setIsActive("disabled");
  }, [props.value]);

  return (
    <div className="switch">
      <h4 className={`switch__option switch__option--${props.value ? "disabled" : "active"}`}>
        Hire
      </h4>
      <div className="switch__toggle" onClick={() => props.handler()}>
        <div
          className={`switch__toggle__path switch__toggle__path--${isActive}`}
        ></div>
        <div
          className={`switch__toggle__marker switch__toggle__marker--${isActive}`}
        ></div>
      </div>
      <h4 className={`switch__option switch__option--${!props.value ? "disabled" : "active"}`}>
        Order
      </h4>
    </div>
  );
};

export default Switch;
