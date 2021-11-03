import { createContext } from "react";

export enum Page {
  HOME = "Home",
  ABOUT = "About",
  CAREER = "Career",
  SKILLS = "Skills",
  PROJECTS = "Projects",
}

const NavigationContext = createContext({
  refs: {
    [Page.HOME]: null,
    [Page.ABOUT]: null,
    [Page.CAREER]: null,
    [Page.SKILLS]: null,
    [Page.PROJECTS]: null,
  },
  currentPage: Page.HOME,
  setRef: (page: Page, element: Element | undefined) => {},
  setCurrentPage: (page: Page) => {},
});

export default NavigationContext;
