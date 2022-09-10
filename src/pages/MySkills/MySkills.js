import React from "react";
import Navbar from "../../components/navbar/Nabvar";
import IconChips from "../../components/skills/Skills";
import './MySkills.css'

export default function MySkills(){
  return(
    <div className="myskills-conteiner">
      <Navbar/>
      <div className="myskills__boxs">
      <IconChips/>
      <MySkills/>
      </div>
    </div>
  )
}