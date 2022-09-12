import React, { useState } from "react"
import PageError from "../../components/error/error";
import Navbar from "../../components/navbar/Nabvar";
import SideBar from "../../components/sidebar/SideBar";
import './authroutes.css'
function AuthWelcome(){
  return(
    <div className="authroutes">
      <Navbar/>
      <div className="parrafo">
      <p>Hola, esto es una pagina de prueba</p>
      </div>
      <div className="side">
      <SideBar/>
      </div>
    </div>
  )
}
export default function AuthTesting(){
  const [isAuth, setAuth]= useState(false)
  if(isAuth){
    return (<AuthWelcome/>)
  }else{
    return (<PageError/>)
  }
}