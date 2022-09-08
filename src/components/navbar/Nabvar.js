import "./Navbar.css";
import * as React from "react";
import ImgAvatar from "./img/Foto";
import Contact from "../contact/Contact";
import MenuIcon from "@mui/icons-material/Menu";
import { blueGrey } from "@mui/material/colors";

export default function Navbar() {
  function onClick(event){
    event.preventDefault()
    const navbarElement = document.getElementById("Navbar__Routes")
    const navbarDiv = document.getElementById("Navbar")
    if(isVisible){
      navbarElement.style.visibility="hidden";
      navbarDiv.style.backgroundColor="transparent"
    setIsVisible(false)
    }else{
      navbarElement.style.visibility="visible";
      navbarDiv.style.backgroundColor=" #9ea0a2"
    setIsVisible(true)
    }
  }
  
  const[ isVisible, setIsVisible]= React.useState(true)
  

  return (
    <div className="Navbar" id="Navbar">
      <button className="Navbar__Menu" onClick={onClick}>
        <MenuIcon sx={{ fontSize: 60, color: blueGrey[500] }} />
      </button>
      <ul className="Navbar__Routes" id="Navbar__Routes">
        <li className="Navbar__animation">
        <h3>Bianca I. Davila D.</h3>
          <ImgAvatar />{" "}
        </li>
        <li className="Navbar__animation">
          <link></link>
        </li>
        <li className="Navbar__animation">
          <link></link>
        </li>
        <li className="Navbar__animation">
          <Contact />
        </li>
      </ul>
    </div>
  );
}
