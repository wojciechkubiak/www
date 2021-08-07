import { useState, useEffect } from "react";

import Navbar from "./navbar";
import Contact from "./contact";
import Footer from "./footer";

const Wrapper = (props) => {
  const [wrapperStyle, setWrapperStyle] = useState("wrapper-opacity");
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = (value) => setShowForm(value ?? !showForm);

  useEffect(() => {
    setTimeout(() => {
      setWrapperStyle("wrapper");
    }, 500);
  }, []);

  return (
    <>
      <Navbar
        isTransparent={props.isTransparent}
        currentPage={props.currentPage}
      />
      <div className={wrapperStyle}>{props.body}</div>
      <Footer />
      <Contact handleShowForm={handleShowForm} showForm={showForm} />
    </>
  );
};

export default Wrapper;
