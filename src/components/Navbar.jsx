import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import Loader from "react-loader-spinner";
import { FaHeadphonesAlt, FaSign, FaBuffer, FaRegIdCard } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

const Menu = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: white;
  height: 100vh;
  width: 68px;
  opacity: 1;
  z-index: 2000;
  display: flex;
  flex-direction: row;
  //   justify-content: center;
`;

const MenuContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 7px;
  padding-right: 7px;
  margin-left: -68px;
  background-color: #464689;
`;

const ShowMenuBtn = styled.button`
  position: absolute;
  top: 90%;
  color: white;
  background-color: #464689;
  border: none;
  outline: none;
  height: 64px;
  width: 48px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const LanguageBtn = styled.button`
  position: absolute;
  top: 80%;
  color: #464689;
  background-color: white;
  border: none;
  outline: none;
  height: 64px;
  width: 48px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Navbar = (props) => {
  let menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuStyleTransparent = { backgroundColor: "transparent" };
  const menuStyleVisible = { backgroundColor: "white" };

  useEffect(() => {
    if (showMenu) {
      gsap.to(menuRef, { x: 68 });
    } else {
      gsap.to(menuRef, { x: 0 });
    }
  }, [showMenu]);

  return (
    <Menu ref={(r) => (menuRef = r)} style={menuStyleTransparent}>
      <MenuContainer>
        <HiHome
          onClick={() => props.setPlayMusic(!props.playMusic)}
          size={54}
          color="white"
        />
        <FaSign
          onClick={() => props.setPlayMusic(!props.playMusic)}
          size={54}
          color="white"
        />
        <FaBuffer
          onClick={() => props.setPlayMusic(!props.playMusic)}
          size={54}
          color="white"
        />
        <FaRegIdCard
          onClick={() => props.setPlayMusic(!props.playMusic)}
          size={54}
          color="white"
        />
        {props.playMusic && (
          <div onClick={() => props.setPlayMusic(!props.playMusic)}>
            <Loader type="Bars" color="white" width="54" />{" "}
          </div>
        )}
        {!props.playMusic && (
          <div onClick={() => props.setPlayMusic(!props.playMusic)}>
            <Loader type="Oval" color="white" width="54" />{" "}
          </div>
        )}
      </MenuContainer>
      <div style={{display: "flex", flexDirection: "column"}}>
      <LanguageBtn>
        <p>PL</p>
      </LanguageBtn>
      <ShowMenuBtn onClick={() => setShowMenu(!showMenu)}>
        {showMenu && <RiMenuFoldLine size={24} color="white" />}
        {!showMenu && <RiMenuUnfoldLine size={24} color="white" />}
      </ShowMenuBtn>
      </div>
    </Menu>
  );
};

export default Navbar;
