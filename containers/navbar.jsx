import Link from "next/link";
import Logo from "../components/logo";
import { useState, useEffect } from "react";
import { pages } from "../utils/constants";

const Navbar = (props) => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState("navbar navbar-in");

  useEffect(() => {
    if (props.isTransparent != null && props.isTransparent != undefined) {
      setIsTransparent(props.isTransparent);
      props.isTransparent
        ? setNavbarStyle("navbar navbar-in")
        : setNavbarStyle("navbar navbar-out");
    }
  }, [props.isTransparent]);

  return (
    <div className={navbarStyle}>
      <Logo isTransparent={isTransparent} />
      <div className="navbar-btns">
        <button className="navbar-btn">
          <Link href={pages.HOME}>Home</Link>
        </button>
        <button className="navbar-btn">
          <Link href={pages.ABOUT}>About</Link>
        </button>
        <button className="navbar-btn">
          <Link href={pages.PROJECTS}>Projects</Link>
        </button>
        <button className="navbar-btn">
          <Link href={pages.SKILLS}>Skills</Link>
        </button>
        <button className="navbar-btn">Contact</button>
      </div>
    </div>
  );
};
export default Navbar;
