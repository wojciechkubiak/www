import React from "react";
import styled from "styled-components";
import device from "../utils/devices";
import {RiDownloadCloud2Line} from "react-icons/ri";

const Download = styled.button`
  position: relative;
  width: 40%;
  left: 30%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 20px;
  border: none;
  background-color: #ff3b69;
  color: white;
  border-radius: 40px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;

  @media only screen and ${device.laptopMax} {
    font-size: 11px;
    padding: 10px;
  }
`;

const About = (props) => {
  return (
    <div style={{ height: "100vh", width: "400px", wordWrap: "break-word", backgroundColor: "#383a63", color: "white", padding: "50px" }}>   
                <h1 style={{color: "white"}}>O mnie słów kilka:</h1>

        <p style={{fontSize: "20px", wordSpacing: "12px", lineHeight: "36px", fontFamily: '"Ubuntu", sans-serif',color: "white", paddingTop: "30px"}}>
        Cześć! Jestem developerem oraz studentem na ostatnim roku Informatyki
        Stosowanej i Systemów Pomiarowych. Komercyjnie - zajmuję się tworzeniem
        aplikacji mobilnych. Prywatnie uwielbiam również tworzyć strony
        internetowe. Wszystko to z zamysłem skomponowania czegoś miłego dla oka
        z czego będę dumny. Jeśli chcesz dowiedzieć się więcej, pobierz moje CV:
        </p>
        <Download><RiDownloadCloud2Line size={32}/></Download>
        <h1 style={{ccolor: "white",}}>Sprawdź moje projekty:</h1>
    </div>
  );
};

export default About;
