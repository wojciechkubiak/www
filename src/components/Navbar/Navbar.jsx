import React, { useEffect, useState } from "react";

import "./Navbar.css";

const Navbar = (props) => {
  const [navbarStyle, setNavbarStyle] = useState("navbar");

  const active = { borderBottom: "3px solid #232323" };

  useEffect(() => {
    if (props.scrollY > 0) {
      setNavbarStyle("navbar navbar-out");
    } else {
      setNavbarStyle("navbar navbar-top");
    }
  }, [props.scrollY]);

  return (
    <div className={navbarStyle}>
      <button style={active}>Home</button>
      <button>About</button>
      <button>Projects</button>
      <button>Skills</button>
      <button>Contact</button>
    </div>
  );
};

export default Navbar;
