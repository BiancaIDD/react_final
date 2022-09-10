import "./Navbar.css";
import * as React from "react";
import ImgAvatar from "./img/Foto";
import Contact from "../contact/Contact";
import MenuIcon from "@mui/icons-material/Menu";
import { teal } from "@mui/material/colors";
import { Link } from "react-router-dom";


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
      navbarDiv.style.backgroundColor= "transparent";
    setIsVisible(true)
    }
  }
  
  const[ isVisible, setIsVisible]= React.useState(true)
  

  return (
    <div className="Navbar" id="Navbar">
      <button className="Navbar__Menu" onClick={onClick}>
        <MenuIcon sx={{ fontSize: 60, color: teal[50] }} />
      </button>
      <ul className="Navbar__Routes" id="Navbar__Routes">
        <li className="Navbar__animation">
        <h3>Bianca I. Davila D.</h3>
          <ImgAvatar />{" "}
        </li>
        <li>
          <Link style={{color:teal[50]}} to='/my_skills'>Skills</Link>
        </li>
        <li className="Navbar__animation">
          <Link style={{color:teal[50]}} to='/projects'>My Projects</Link>
        </li>
        <li className="Navbar__animation">
          <Link style={{color:teal[50]}} to='/pagina_priv'>Private</Link>
        </li>
        <li className="Navbar__animation">
          <Contact />
        </li>

      </ul>
    </div>
  );
}
