import styled from "styled-components";

const Ahref = styled.a`
  text-decoration: none;
`;

interface ILogo {
  isTransparent?: boolean;
}

const LogoText = styled.h4`
  margin: 0 !important;
  font-size: 20px;
  color: ${(props: ILogo) =>
    props.isTransparent ? "rgba(0, 0, 0, 0.6)" : "white"};
  position: absolute;
  font-family: "Quicksand", sans-serif;
  font-weight: lighter;
  letter-spacing: 2px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (max-width: 1200px) {
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 240px;
    text-align: center;
  }
`;

const Logo = ({ isTransparent }: ILogo) => (
  <Ahref href="https://wojciechkubiak.com">
    <LogoText isTransparent={isTransparent}>WOJCIECH KUBIAK</LogoText>
  </Ahref>
);

export default Logo;
