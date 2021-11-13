import { ChangeEvent, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

interface IForm {
  hideForm: () => void;
}

const MessageForm = styled.form`
  position: fixed;
  background-color: white !important;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 10px;
  width: 620px;
  right: 50px;
  bottom: 50px;
  z-index: 2000;

  & > button:first-child {
    width: 40px;
    height: 40px;
    background-color: white !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }

  & > button:first-child > svg {
    color: rgba(0, 0, 0, 0.67);
  }

  & > h1 {
    text-align: center;
    color: rgba(0, 0, 0, 0.67);
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
  }

  @media only screen and (max-width: 1200px) {
    overflow: scroll;
    position: fixed;
    background-color: white;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100vh;
    left: 0;
    bottom: 0;
    z-index: 2000;

    & > h1 {
      margin: 0 !important;
      padding-top: 100px;
    }

    & > button:first-child {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    width: 80%;
  }
`;

const FormInputs = styled.div`
  margin-top: 32px;
`;

const FormInput = styled.div`
  position: relative;
  bottom: 0;
  text-align: center;
  padding-top: 12px;
  margin-left: 42px;
  margin-right: 42px;
  margin-top: 24px;
  color: rgba(0, 0, 0, 0.67);
  font-family: "Quicksand", sans-serif;
  font-size: 14px;

  @media only screen and (max-width: 1200px) {
    margin-left: 72px;
    margin-right: 72px;
    margin-top: 42px;
  }

  @media only screen and (max-width: 800px) {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 42px;
  }
`;

const Label = styled.h4`
  position: absolute;
  margin: 0 !important;
  background-color: white;
  padding-left: 12px;
  padding-right: 12px;
`;

const Button = styled.button`
  width: 64px;
  height: 64px;
  position: fixed;
  bottom: 82px;
  right: 12px;
  background-color: #55be78;
  border: none !important;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 300ms;
  z-index: 2200;

  & > svg {
    color: white;
  }

  & > span {
    border-color: white;
    border-bottom-color: transparent;
  }
`;

const Form = ({ hideForm }: IForm) => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const clearData = () => {
    setEmail("");
    setSubject("");
    setContent("");
  };

  const sendEmail = (event: ChangeEvent<any>) => {
    event.preventDefault();
    setIsClicked(true);

    const mail = {
      mail: email,
      subject: subject,
      content: content,
    };

    axios
      .post(`https://portolio-email-sender.herokuapp.com/`, { mail })
      .then((res) => {
        clearData();
        setIsClicked(false);
        hideForm();
        console.log(res);

        setIsClicked(false);
      })
      .catch((error) => {
        console.log(error);

        setIsClicked(false);
      });
  };

  return (
    <>
      <MessageForm onSubmit={sendEmail}>
        <button onClick={hideForm}>
          <FiArrowLeft size={22} />
        </button>
        <h1>Contact.</h1>
        <FormInputs>
          <FormInput>
            <Label>Email</Label>
            <input
              disabled={isClicked}
              placeholder="your email."
              value={email}
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
          </FormInput>
          <FormInput>
            <Label>Subject</Label>
            <input
              disabled={isClicked}
              placeholder="your subject."
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              minLength={5}
              required
            />
          </FormInput>
          <FormInput>
            <Label>Message</Label>
            <textarea
              disabled={isClicked}
              placeholder="your message."
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
              minLength={15}
              required
            />
          </FormInput>
        </FormInputs>
        <Button type="submit" disabled={isClicked}>
          {isClicked && <ClipLoader size={36} />}
          {!isClicked && <RiSendPlaneLine size={36} />}
        </Button>
      </MessageForm>
    </>
  );
};

export default Form;
