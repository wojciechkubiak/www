import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const NavigationButton = (props) => (
  <button
    onClick={props.onClick}
    className={props.isBack ? "navigation__back" : "navigation__forward"}
  >
    {props.isBack ? (
      <MdKeyboardArrowLeft size={42} />
    ) : (
      <MdKeyboardArrowRight size={42} />
    )}
  </button>
);

export default NavigationButton;
