import { RiMessage3Line, RiCloseLine } from "react-icons/ri";
import styled from "styled-components";

interface Theme {
  isActive?: boolean;
}

interface IMessageIcon {
  isActive?: boolean;
  onClick: () => void;
}

const Button = styled.button`
  color: ${(props: Theme) => (props.isActive ? "white" : "rgba(0, 0, 0, 0.6)")};

  width: 64px;
  height: 64px;
  position: fixed;
  bottom: 12px;
  right: 12px;
  background-color: ${(props: Theme) => (props.isActive ? "white" : "#4e8661")};
  border: none !important;
  border-radius: 50%;
  transition: 300ms;
  z-index: 2200;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  & > svg {
    color: ${(props: Theme) =>
      props.isActive ? "rgba(0, 0, 0, 0.67)" : "white"};
  }
`;

const MessageIcon = ({ isActive, onClick }: IMessageIcon) => {
  const theme: Theme = { isActive: isActive };

  const icon = () => {
    if (!isActive) {
      return <RiMessage3Line size={42} />;
    }
    return <RiCloseLine size={42} />;
  };

  return (
    <Button onClick={onClick} isActive={theme.isActive}>
      {icon()}
    </Button>
  );
};

export default MessageIcon;
