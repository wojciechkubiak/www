import { useState } from "react";

import Navbar from "./navbar";
import Contact from "./contact";
import Footer from "./footer";

const Wrapper = (props) => {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = (value) => setShowForm(value ?? !showForm);

  return (
    <>
      <Navbar
        isTransparent={props.isTransparent}
        currentPage={props.currentPage}
      />
      {props.body}
      <Footer />
      <Contact handleShowForm={handleShowForm} showForm={showForm} />
    </>
  );
};

export default Wrapper;
