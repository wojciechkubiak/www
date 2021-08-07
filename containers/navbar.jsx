import Link from "next/link";
import Logo from "../components/logo";
import { useState, useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";

import { pages } from "../utils/constants";



const Navbar = (props) => {
  const [isTransparent, setIsTransparent] = useState(
    props.isTransparent ?? false
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState("navbar navbar-in");

  useEffect(() => {
    if (props.isTransparent != null && props.isTransparent != undefined) {
      setIsTransparent(props.isTransparent);
      props.isTransparent
        ? setNavbarStyle("navbar navbar-in")
        : setNavbarStyle("navbar navbar-out");
    }
  }, [props.isTransparent]);

  const linkButton = (text, isDropdown, href) => {
    return (
      <button
        className={
          props.currentPage == href && isDropdown
            ? "navbar-btn navbar-btn-active"
            : "navbar-btn"
        }
      >
        {href && <Link href={href}>{text}</Link>}
      </button>
    );
  };

  const buttons = (isDropdown = false) => (
    <>
      {linkButton("Home", isDropdown, pages.HOME)}
      {linkButton("About", isDropdown, pages.ABOUT)}
      {linkButton("Projects", isDropdown, pages.PROJECTS)}
      {linkButton("Skills", isDropdown, pages.SKILLS)}
    </>
  );

  return (
    <div className={navbarStyle}>
      <Logo isTransparent={isTransparent} />
      <button
        className="navbar-menu-btn"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <RiMenuLine size={42} />
      </button>
      <div className="navbar-btns">{buttons()}</div>
      {showDropdown && (
        <div className="navbar-dropdown-btns">{buttons(true)}</div>
      )}
    </div>
  );
};
export default Navbar;
