import React, { useState } from "react"
import { Navigate} from "react-router-dom";
import PageError from "../../components/error/error";
import Navbar from "../../components/navbar/Nabvar";
import './authroutes.css'
function AuthWelcome(){
  return(
    <div className="authroutes">
      <Navbar/>
      <p>Hola, esto es una pagina de prueba</p>
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