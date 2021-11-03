import React, { useContext, useEffect, useState } from "react";
import useScrollPosition from "../hooks/UseScrollPosition";
import styled, { ThemeProvider } from "styled-components";
import { RiMenuLine } from "react-icons/ri";
import Logo from "../components/Logo";
import { scrollTop } from "../functions/Scroll";
import { MdKeyboardArrowUp } from "react-icons/md";
import NavigationContext from "../context/NavigationContext";
import { Page } from "../context/NavigationContext";

interface Theme {
  isTransparent?: boolean;
  isActive?: boolean;
}

const NavbarContainer = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  transition: all 500ms;
  background-color: ${(props: Theme) =>
    props.isTransparent ? "transparent" : "#60bc7c"};
  box-shadow: ${(props: Theme) =>
    props.isTransparent
      ? "none"
      : "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"};
`;

const NavbarButtons = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (max-width: 1200px) {
    display: none !important;
  }
`;

const NavbarDropdownButtons = styled.div`
  display: none;

  @media only screen and (max-width: 1200px) {
    background-color: #60bc7c;
    padding: 80px 200px 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }

  @media only screen and (max-width: 800px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 0 !important;
  }
`;

const NavbarMenuButton = styled.button`
  display: none;

  @media only screen and (max-width: 1200px) {
    display: block;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    color: rgba(0, 0, 0, 0.67);
  }
`;

const NavbarButton = styled.button`
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  background-color: ${(props: Theme) =>
    !props.isActive ? "transparent" : "#60bc7c"};
  font-family: "Quicksand", sans-serif;
  color: ${(props: Theme) => (props.isActive ? "white" : "rgba(0, 0, 0, 0.6)")};
  font-weight: 500;
  padding: 10px 20px 10px 20px;
  font-size: 18px;
  margin-left: 8px;
  margin-right: 8px;

  @media only screen and (max-width: 1200px) {
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 22px;
    background-color: ${(props: Theme) =>
      !props.isActive ? "transparent" : "white"};
    color: ${(props: Theme) =>
      props.isActive ? "rgba(0, 0, 0, 0.6)" : "white"};
  }
`;

const ScrollTopButton = styled.button`
  background-color: #4e8661;
  z-index: 2000;
  width: 42px;
  height: 42px;
  position: fixed;
  bottom: 12px;
  left: 12px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 500ms all;
`;

const Navbar = () => {
  const isOut = useScrollPosition();
  const navigationContext = useContext(NavigationContext);

  const [theme, setTheme] = useState<Theme>({
    isTransparent: false,
  });
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    setTheme({ isTransparent: !isOut });
  }, [isOut]);

  const Button = (page: Page) => (
    <ThemeProvider theme={theme}>
      <NavbarButton
        onClick={() => {
          if (
            (navigationContext?.refs[page] || page === Page.HOME) &&
            navigationContext.currentPage !== page
          ) {
            if (page === Page.HOME) {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            } else {
              const element: any = navigationContext?.refs[page];
              const y =
                element.getBoundingClientRect().top + window.scrollY - 70;
              if (element) window.scrollTo({ top: y, behavior: "smooth" });
            }
          }
          if (showDropdown) setShowDropdown(false);
        }}
        isActive={page === navigationContext.currentPage}
      >
        {page?.toString()}
      </NavbarButton>
    </ThemeProvider>
  );

  return (
    <ThemeProvider theme={theme}>
      <NavbarContainer isTransparent={theme.isTransparent}>
        <Logo isTransparent={theme.isTransparent} />
        <NavbarMenuButton onClick={() => setShowDropdown(!showDropdown)}>
          <RiMenuLine size={42} />
        </NavbarMenuButton>
        <NavbarButtons>
          {Button(Page.HOME)}
          {Button(Page.ABOUT)}
          {Button(Page.CAREER)}
          {Button(Page.PROJECTS)}
          {Button(Page.SKILLS)}
        </NavbarButtons>
        {showDropdown && (
          <NavbarDropdownButtons>
            {Button(Page.HOME)}
            {Button(Page.ABOUT)}
            {Button(Page.CAREER)}
            {Button(Page.PROJECTS)}
            {Button(Page.SKILLS)}
          </NavbarDropdownButtons>
        )}
      </NavbarContainer>
      {isOut && (
        <ScrollTopButton onClick={() => scrollTop()}>
          <MdKeyboardArrowUp size={20} color="white" />
        </ScrollTopButton>
      )}
    </ThemeProvider>
  );
};

export default Navbar;
