import React from "react";
import Card1 from "../../components/cardsProyects/Card1";
import Card2 from "../../components/cardsProyects/Card2";
import Card3 from "../../components/cardsProyects/Card3";
import Card4 from "../../components/cardsProyects/Card4";
import Navbar from "../../components/navbar/Nabvar";
import SideBar from "../../components/sidebar/SideBar";
import "./proyects.css";

export default function Proyects() {
  return (
    <div className="proyects-conteiner">
      <Navbar />
      <div className="proyects__cards">
        <h2>My best projects</h2>
        <div className="proyects__card1">
          <Card1 />
          <Card2 />
        </div>
        <div className="proyects__card2">
          <Card3 />
          <Card4 />
        </div>
      </div>
      <SideBar/>
    </div>
  );
}
