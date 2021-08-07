import Link from "next/link";
import Logo from "../components/logo";
import { useState, useEffect } from "react";
import { pages } from "../utils/constants";

const Navbar = (props) => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState("navbar-in");

  useEffect(() => {
    if (props.isTransparent != null && props.isTransparent != undefined) {
      setIsTransparent(props.isTransparent);
      props.isTransparent
      ? setNavbarStyle("navbar-in")
      : setNavbarStyle("navbar-out");
    }
  }, [props.isTransparent]);

  return (
    <div className={navbarStyle}>
      <Logo isTransparent={isTransparent} />
      {/* <Link href={pages.HOME}>Home</Link>
      <Link href={pages.ABOUT}>About</Link> */}
    </div>
  );
};
export default Navbar;
