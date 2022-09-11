import React from "react";
import Navbar from "../../components/navbar/Nabvar";
import IconChips from "../../components/skills/Skills";
import SoftSkills from "../../components/skills/SkillsSoft";
import TextCard1 from "../../components/skills/textbox/TextBox1";
import TextCard2 from "../../components/skills/textbox/Textbox2";
import SideBar from "../../components/sidebar/SideBar";
import "./MySkills.css";

export default function MySkills() {
  return (
    <div className="myskills-conteiner">
      <Navbar />
      <div className="myskills__boxs">
        <div className="myskills__card1">
          <IconChips />
          <TextCard1 />
        </div>
        <div className="myskills__card2">
          <TextCard2 />
          <SoftSkills />
        </div>
      </div>
      <SideBar/>
    </div>
  );
}
