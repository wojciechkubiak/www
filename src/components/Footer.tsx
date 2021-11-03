import Pattern from "../assets/pattern.png";
import styled from "styled-components";

const FooterContainer = styled.div`
  max-width: 100vw;
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
  background-image: url(${Pattern});

  @media only screen and (max-width: 800px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const FooterText = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: "Quicksand", sans-serif;
  font-weight: lighter;
  font-size: 18px;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; 2021 Wojciech Kubiak</FooterText>
  </FooterContainer>
);

export default Footer;
