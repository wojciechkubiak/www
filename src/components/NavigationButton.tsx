import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

interface INavigationButton {
  onClick: () => void;
  isBack: boolean;
}

interface Theme {
  isBack: boolean;
}

const Navigation = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #60bc7c;
  border: none !important;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  height: 92px;
  width: 92px;
  z-index: 950;
  opacity: 0.5;
  transition: 200ms;
  left: ${(props: Theme) => (props.isBack ? "20px" : "auto")};
  right: ${(props: Theme) => (!props.isBack ? "20px" : "auto")};

  &:hover {
    opacity: 1;
    transition: 200ms;
  }

  @media only screen and (max-width: 800px) {
    opacity: 0.2;
    top: 70%;
    transform: translateY(-50%);
  }

  @media only screen and (max-width: 700px) {
    height: 52px;
    width: 52px;
  }
`;

const NavigationButton = ({ onClick, isBack }: INavigationButton) => {
  const theme: Theme = { isBack: isBack };

  return (
    <Navigation onClick={onClick} isBack={theme.isBack}>
      {isBack ? (
        <MdKeyboardArrowLeft size={42} />
      ) : (
        <MdKeyboardArrowRight size={42} />
      )}
    </Navigation>
  );
};

export default NavigationButton;
