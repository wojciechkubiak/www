import React, { useEffect, useState, useRef } from "react";
import { ImMenu, ImCross } from "react-icons/im";
import {
  FaLinkedin,
  FaGitSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import gsap from "gsap";
import "./Navbar.css";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  let fullscreenMenu = useRef(null);

  const activeClassName = "navbar-option-active";
  const notActiveClassNames = "navbar-option-not-active";

  useEffect(() => {
    const t1 = gsap.timeline();

    if (showMenu) {
      t1.to(fullscreenMenu, {
        marginLeft: "0px",
        duration: 1,
        onComplete: () => (document.body.style.overflow = "hidden"),
      });
    } else {
      t1.to(fullscreenMenu, { marginLeft: "-3860px", duration: 1 });
      document.body.style.overflow = "visible";
    }
  }, [showMenu]);

  const switchPage = (targetPage) => {
    switch (targetPage) {
      case "home":
        props.goHome();
        break;
      case "about":
        props.goAbout();
        break;
      case "projects":
        props.goProjects();
        break;
      case "skills":
        props.goSkills();
        break;
      case "contact":
        props.goContact();
        break;
      default:
        props.goHome();
        break;
    }
  };

  const menuItem = (value) => {
    return (
      <h1
        className={`navbar-option ${
          props.currentPage === value ? activeClassName : notActiveClassNames
        }`}
        onClick={() => {
          props.setCurrentPage(value);
          if (value !== props.currentPage)
            setTimeout(() => {
              setShowMenu(false);
              switchPage(value);
            }, 200);
        }}
      >
        {value.toUpperCase()}
      </h1>
    );
  };

  return (
    <div className="navbar">
      <button className="navbar-show-btn" onClick={() => setShowMenu(true)}>
        <ImMenu size={48} color="black"/>
      </button>
      <div ref={(r) => (fullscreenMenu = r)} className="navbar-menu">
        <button className="navbar-hide-btn" onClick={() => setShowMenu(false)}>
          <ImCross size={48} color="white" />
        </button>
        <div className="navbar-content">
          <div className="navbar-decoration">
            <h1 className="navbar-header">MENU</h1>
            <div className="navbar-picker">
              {menuItem("home")}
              {menuItem("about")}
              {menuItem("projects")}
              {menuItem("skills")}
              {menuItem("contact")}
            </div>
            <div className="navbar-social" style={{height: "42px", position: "relative", right: "0%"}}>
              <div className="navbar-social-items">
              <a href="https://www.linkedin.com/in/wojciechkubiakin">
                <FaLinkedin color="white" size={42} />
              </a>
              <a href="https://www.github.com/wojciechkubiak">
                <FaGitSquare color="white" size={42} />
              </a>
              <a href="https://www.facebook.com/wojciechkubiakfb">
                <FaFacebookSquare color="white" size={42} />
              </a>
              <a href="https://www.instagram.com/biaqe/">
                <FaInstagramSquare color="white" size={42} />
              </a>
              </div>
            </div>
          </div>
          <div className="navbar-home">
            <div className="home-tile-top"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
