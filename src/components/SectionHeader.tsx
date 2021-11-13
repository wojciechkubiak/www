import Pattern from "../assets/pattern.png";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import NavigationContext, { Page } from "../context/NavigationContext";

const Section = styled.div`
  max-width: 100vw;
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
  background-image: url(${Pattern});
`;

const SectionText = styled.h4`
  color: rgba(0, 0, 0, 0.8) !important;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  font-size: 36px;
`;

interface ISectionHeader {
  text: string;
  page?: Page;
}

const SectionHeader = ({ text, page }: ISectionHeader) => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  const navigationContext = useContext(NavigationContext);

  useEffect(() => {
    if (inView && page && navigationContext.currentPage !== page) {
      navigationContext.setCurrentPage(page);
    }
  }, [inView, navigationContext, page]);

  useEffect(() => {
    if (page && !navigationContext.refs[page] && entry?.target) {
      navigationContext.setRef(page, entry?.target);
    }
  }, [entry?.target, navigationContext, page]);

  return (
    <Section ref={ref}>
      <SectionText>{text}</SectionText>
    </Section>
  );
};

export default SectionHeader;
