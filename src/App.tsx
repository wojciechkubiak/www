import React, { useContext, useState } from "react";
import "./App.css";
import { Page } from "./context/NavigationContext";
import Navbar from "./containers/Navbar";
import Home from "./containers/Home";
import About from "./containers/About";
import MessageIcon from "./components/MessageIcon";
import Form from "./containers/Form";
import Footer from "./components/Footer";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import NavigationContext from "./context/NavigationContext";

const App = () => {
  const navigationContext = useContext(NavigationContext);
  const [refs, setRefs] = useState(navigationContext.refs);
  const [currentPage, setCurrentPage] = useState<Page>(
    navigationContext.currentPage
  );
  const [isForm, setIsForm] = useState<boolean>(false);

  const handleRef = (page: Page, element: Element | undefined) => {
    if (!refs[page]) {
      setRefs((prev) => ({
        ...prev,
        [page]: element,
      }));
    }
  };

  const handleCurrentPage = (page: Page) => {
    setCurrentPage(page);
  };

  const handleForm = () => setIsForm(!isForm);
  const hideForm = () => setIsForm(false);

  return (
    <div className="App">
      <NavigationContext.Provider
        value={{
          refs: refs,
          currentPage: currentPage,
          setRef: handleRef,
          setCurrentPage: handleCurrentPage,
        }}
      >
        <Navbar />
        <MessageIcon onClick={handleForm} isActive={isForm} />
        {isForm && <Form hideForm={hideForm} />}
        <Home />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </NavigationContext.Provider>
    </div>
  );
};

export default App;
