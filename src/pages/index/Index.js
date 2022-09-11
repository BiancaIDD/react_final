import React from "react";
import AboutMe from "../../components/aboutme/AboutMe";
import MyHobbies from "../../components/MyHobbies/MyHobbies";
import Navbar from "../../components/navbar/Nabvar"
import Goals from "../../components/goals/Goals"
import "./Index.css"
import SideBar from "../../components/sidebar/SideBar";


export default function Index(){
  
  return(
    <div className="index-conteiner">
      <Navbar/>
      <AboutMe/>
      <div className="index__cards">
      <MyHobbies/>
      <Goals/>
      </div>
      <SideBar/>
    </div>
  )
}